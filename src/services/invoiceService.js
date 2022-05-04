import axios from 'axios';
import { computed, ref } from 'vue';
import { API_URL, HOST } from '../config';
import { deleteData, getData, postData, postImage, putData } from '../helpers';

const data = ref([]);

const invoiceUrl = `${API_URL}invoice/`;

const daysBetween = (date) => {
  const now = new Date();
  return Math.round((date - now) / (1000 * 60 * 60 * 24));
};

// Regn ut driftsinntekter basert på fakturarer
export const totalEarned = computed(() =>
  new Intl.NumberFormat('no-NB').format(
    data.value.map((item) => item.total).reduce((acc, cur) => (acc += cur), 0)
  )
);

export const getInvoices = async () => {
  const res = await getData(invoiceUrl);
  const invoices = [];
  res.forEach((invoice) => {
    const inv = {
      id: invoice.id,
      title: invoice.title,
      company: invoice.company,
      product: invoice.product,
      dateDue: invoice.dateDue,
      total: invoice.total,
    };

    invoices.push(inv);
  });

  data.value = invoices;
};

export const daysDue = (invoice) =>
  computed(() => daysBetween(new Date(invoice.dateDue)));

export const getOne = (id) =>
  computed(() => data.value.find((invoice) => invoice.id === id));

export const postInvoice = async (invoice) => {
  const now = new Date().getTime();
  const dateDue = invoice.daysDue * 86400000;

  const newInvoice = {
    company: invoice.company,
    product: invoice.product,
    total: invoice.total,
    dateDue: new Date(now + dateDue).toISOString(),
    sent: false,
  };
  await postData(invoiceUrl, newInvoice);
  await getInvoices();
};

export const putInvoice = async (invoice) => {
  const now = new Date().getTime();
  const dateDue = invoice.daysDue * 86400000;

  const currentInvoice = await getData(`${invoiceUrl}${invoice.id}`);

  const editedInvoice = {
    id: currentInvoice.id,
    company: invoice.company,
    product: invoice.product,
    total: invoice.total,
    dateDue: new Date(now + dateDue).toISOString(),
    sent: false,
  };

  console.log(editedInvoice);

  await putData(invoiceUrl, editedInvoice);
  await getInvoices();
};

export const deleteInvoice = async (id) => {
  await deleteData(`${invoiceUrl}${id}`);
};

export const getAll = computed(() => data.value);
