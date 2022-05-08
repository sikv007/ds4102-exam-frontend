import axios from 'axios';
import { getAssignments } from './services/assigmentService';
import { getCompanies } from './services/companyService';
import { getDevelopers } from './services/developerService';
import { getInvoices } from './services/invoiceService';
import { setError } from './services/appService';

// Initialiser applikasjonen ved å hente inn data
export const init = async () => {
  try {
    await getDevelopers();
    await getInvoices();
    await getCompanies();
    await getAssignments();
  } catch (err) {
    setError(true, err.message);
    console.error(err);
  }
};

// Generisk funksjon for GET requests
export const getData = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

// Generisk funksjon for POST requests
export const postData = async (url, payload) => {
  await axios.post(url, payload);
};

/**
 * Generisk funksjon for PUT Requests
 */
export const putData = async (url, payload) => {
  await axios.put(url, payload);
};

// Generisk funksjon for DELETE Requests
export const deleteData = async (url) => {
  await axios.delete(url);
};

// Generisk funksjon for Bildeopplasting
export const postImage = async (url, payload) => {
  await axios({
    method: 'POST',
    url: `${url}PostImage`,
    data: payload,
    config: { header: { 'Content-Type': 'multipart/form-data' } },
  });
};

// Generisk funksjon for å formatere datoer
export const formatDate = (date) => new Date(date).toLocaleDateString('no-NB');

// Generisk funksjon for å formatere priser/tall
export const formatPrice = (price) => new Intl.NumberFormat('nb-NO').format(price);