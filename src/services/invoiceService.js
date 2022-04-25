import axios from "axios";
import { computed, ref } from "vue";
import { API_URL, HOST } from "../config";
import { deleteData, getData, postData, postImage, putData } from "../helpers";

const data = ref([]);

const invoiceUrl = `${API_URL}invoice/`;

export const getInvoices = async () => {
  const res = await getData(invoiceUrl);
  const invoices = [];
  res.forEach((invoice) => {
    const inv = {
      id: invoice.id,
      title: invoice.title,
      company: invoice.company,
      product: invoice.product,
      daysDue: invoice.daysDue,
      total: invoice.total,
    };

    invoices.push(inv);
  });

  data.value = invoices;
};

export const daysDue = (invoice) => computed(() => invoice.daysDue);

export const postInvoice = async (invoice) => {
  console.log(invoice);
  const newInvoice = {
    company: invoice.company,
    product: invoice.product,
    total: invoice.total,
    daysDue: invoice.daysDue,
    sent: false,
  };
  await postData(invoiceUrl, newInvoice);
  await getInvoices();
};

export const getAll = computed(() => data.value);
