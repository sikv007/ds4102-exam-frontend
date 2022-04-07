import axios from "axios";
import { computed, ref } from "vue";
import { API_URL } from "../config";

const data = ref([]);

const fetchDevelopers = async () => {
  const res = await axios.get(`${API_URL}developer`);
  console.log(res.data);

  res.data.forEach((dev) => {
    const developer = {
      id: dev.id,
      name: `${dev.firstName} ${dev.lastName}`,
      jobTitle: dev.jobTitle,
      phone: dev.phone,
      email: dev.email,
      skills: dev.skills.split(","),
    };
    data.value.push(developer);
  });
};

const getAll = computed(() => data.value);

export const useDevelopersService = () => {
  return {
    getAll,
    fetchDevelopers,
  };
};
