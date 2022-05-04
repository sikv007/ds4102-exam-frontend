import axios from 'axios';
import { computed, ref } from 'vue';
import { API_URL, HOST } from '../config';
import { deleteData, getData, postData, postImage, putData } from '../helpers';

const data = ref([]);

const companyUrl = `${API_URL}company/`;

// Hent alle kunder
export const getCompanies = async () => {
  const res = await getData(companyUrl);
  const companies = [];
  res.forEach((company) => {
    const comp = {
      id: company.id,
      name: company.name,
      address: company.address,
      assignments: company.assignments?.split(',') || null,
      contactName: company.contactName,
      contactEmail: company.contactEmail,
      organizationNumber: company.organizationNumber,
      image: `${HOST}src/img/company/${company.image}`,
    };

    companies.push(comp);
  });
  data.value = companies;
};

const postCompanyImage = async (image) => {
  await postImage(companyUrl, image);
};

export const postCompany = async (company, image) => {
  const newCompany = {
    name: company.name,
    address: company.address,
    contactName: company.contactName,
    contactEmail: company.contactEmail,
    image: image.get('file').name,
    organizationNumber: company.organizationNumber,
  };
  await postData(companyUrl, newCompany);
  await postCompanyImage(image);
  await getCompanies();
};

export const putCompany = async (company, image) => {
  const editedCompany = {
    id: company.id,
    name: company.name,
    address: company.address,
    assignments: company.assignments?.join(',') || null,
    contactName: company.contactName,
    contactEmail: company.contactEmail,
    organizationNumber: company.organizationNumber,
  };

  const currentImage = getOne(company.id).value.image;
  if (!image.get('file')) {
    editedCompany.image = currentImage.slice(currentImage.lastIndexOf('/') + 1);
  } else {
    editedCompany.image = image.get('file').name;
  }
  await putData(companyUrl, editedCompany);
  if (image.get('file')) await postCompanyImage(image);
  await getCompanies();
};

export const deleteCompany = async (id) => {
  await deleteData(`${companyUrl}${id}`);
};

export const getAll = computed(() => data.value);

export const getOne = (id) =>
  computed(() => data.value.find((company) => company.id === id));

export const companyList = computed(() =>
  data.value.map((company) => company.name)
);

export const findCompanyByAssignment = (assignment) =>
  computed(() =>
    data.value.find((company) => company.name === assignment.value.company)
  );

export const addAssignmentToCompany = async (company, assignment) => {
  const currentCompany = await getData(`${companyUrl}${company.id}`);
  console.log(currentCompany);
  console.log(!currentCompany.assignments);
  if (!currentCompany.assignments) currentCompany.assignments = [];
  else currentCompany.assignments = currentCompany.assignments.split(',');
  currentCompany.assignments.push(assignment.title);
  currentCompany.assignments = currentCompany.assignments.join(',');
  await putData(`${companyUrl}`, currentCompany);
  await getCompanies();
};

export const numberOfCompanies = computed(() => data.value.length);
