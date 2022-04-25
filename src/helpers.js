import axios from 'axios';
import { getAssignments } from './services/assigmentService';
import { useCompanyService } from './services/companyService';
import { getDevelopers } from './services/developerService';
import { getInvoices } from './services/invoiceService';
import { setError } from './services/appService';

export const init = async () => {
  try {
    const companies = useCompanyService();
    await getDevelopers();
    await getInvoices();
    await companies.getCompanies();
    await getAssignments();
  } catch(err) {
    setError(true, err.message);
    console.error(err)
  }
};

export const getData = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

export const postData = async (url, payload) => {
  await axios.post(url, payload);
};

export const postImage = async (url, payload) => {
  await axios({
    method: 'POST',
    url: `${url}PostImage`,
    data: payload,
    config: { header: { 'Content-Type': 'multipart/form-data' } },
  });
};

export const putData = async (url, payload) => {
  await axios.put(url, payload);
};

export const deleteData = async (url) => {
  await axios.delete(url);
};
