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

// Bildeopplasting for kunde
const postCompanyImage = async (image) => {
  await postImage(companyUrl, image);
};

// Legg til kunde
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

// Rediger kunde
export const putCompany = async (company, image) => {
  const currentCompany = await getData(`${companyUrl}${company.id}`);

  const editedCompany = {
    id: currentCompany.id,
    name: company.name,
    address: company.address,
    assignments: currentCompany.assignments,
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

// Slett kunde
export const deleteCompany = async (id) => {
  await deleteData(`${companyUrl}${id}`);
};

// Hent alle kunder
export const getAll = computed(() => data.value);

// Hent en kunde
export const getOne = (id) =>
  computed(() => data.value.find((company) => company.id === id));

// Generer en liste basert på kundenavn
export const companyList = computed(() =>
  data.value.map((company) => company.name)
);

// Finn kunde basert på oppdrag
export const findCompanyByAssignment = (assignment) =>
  computed(() =>
    data.value.find((company) => company.id === +assignment.value.company)
  );

// Legg et oppdrag til kunden
export const addAssignmentToCompany = async (company, assignment) => {
  const currentCompany = await getData(`${companyUrl}${company.id}`);
  if (!currentCompany.assignments) currentCompany.assignments = [];
  else currentCompany.assignments = currentCompany.assignments.split(',');
  currentCompany.assignments.push(assignment.title);
  currentCompany.assignments = currentCompany.assignments.join(',');
  await putData(`${companyUrl}`, currentCompany);
  await getCompanies();
};

// Hent antall kunder
export const numberOfCompanies = computed(() => data.value.length);
