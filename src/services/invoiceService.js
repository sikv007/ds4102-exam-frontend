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
      company: invoice.company,
      product: invoice.product,
      daysDue: invoice.daysDue,
      total: invoice.total,
    };

    invoices.push(inv);
  });

  data.value = invoices;
};

export const getAll = computed(() => data.value);

// export const useCompanyService = () => {
//   return {
//     getInvoices
//   };
// };
