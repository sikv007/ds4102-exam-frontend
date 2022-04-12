import axios from "axios";
import { computed, ref } from "vue";
import { API_URL, HOST } from "../config";
import { deleteData, getData, postData, postImage, putData } from "../helpers";

const data = ref([]);

const companyUrl = `${API_URL}company/`;

const getCompanies = async () => {
  const res = await getData(companyUrl);
  const companies = [];
  res.forEach((company) => {
    const comp = {
      id: company.id,
      name: company.name,
      address: company.address,
      assignments: company.assignments?.split(",") || null,
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

const postCompany = async (company, image) => {
  const newCompany = {
    name: company.name,
    address: company.address,
    contactName: company.contactName,
    contactEmail: company.contactEmail,
    image: image.get("file").name,
    organizationNumber: company.organizationNumber,
  };
  await postData(companyUrl, newCompany);
  await postCompanyImage(image);
  await getCompanies();
};

const putCompany = async (company, image) => {
  const editedCompany = {
    id: company.id,
    name: company.name,
    address: company.address,
    assignments: company.assignments?.join(",") || null,
    contactName: company.contactName,
    contactEmail: company.contactEmail,
    organizationNumber: company.organizationNumber,
  };

  const currentImage = getOne(company.id).value.image;
  if (!image.get("file")) {
    editedCompany.image = currentImage.slice(currentImage.lastIndexOf("/") + 1);
  } else {
    editedCompany.image = image.get("file").name;
  }
  await putData(companyUrl, editedCompany);
  if (image.get("file")) await postCompanyImage(image);
  await getCompanies();
};

const deleteCompany = async (id) => {
  await deleteData(`${companyUrl}${id}`);
};

const getAll = computed(() => data.value);

const getOne = (id) => {
  const company = computed(() =>
    data.value.find((company) => company.id === id)
  );
  return company;
};

export const useCompanyService = () => {
  return {
    getAll,
    getCompanies,
    getOne,
    postCompany,
    deleteCompany,
    putCompany,
  };
};
