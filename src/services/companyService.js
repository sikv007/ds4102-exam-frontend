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
    const developer = {
      id: company.id,
      name: company.name,
      assignments: company.assignments.split(","),
      logo: company.logo,
      contactName: company.contactName,
      contactEmail: company.contactEmail,
    };
    companies.push(developer);
  });
  data.value = companies;
};

const getAll = computed(() => data.value);

const getOne = (id) => {
  const company = computed(() =>
    data.value.find((company) => company.id === id)
  );
  return company;
};

const useCompanyService = () => {
  return {
    getAll,
    getCompanies,
    getOne,
  };
};
