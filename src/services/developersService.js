import axios from "axios";
import { computed, ref } from "vue";
import { API_URL, HOST } from "../config";
console.log(HOST);
const data = ref([]);

const getDevelopers = async () => {
  const res = await axios.get(`${API_URL}developer`);
  const devs = [];
  console.log(res);
  res.data.forEach((dev) => {
    const developer = {
      id: dev.id,
      name: `${dev.firstName} ${dev.lastName}`,
      jobTitle: dev.jobTitle,
      phone: dev.phone,
      email: dev.email,
      skills: dev.skills.split(","),
      image: `${HOST}src/img/developers/${dev.image}`,
    };
    devs.push(developer);
  });
  data.value = devs;
};

const postImage = async (image) => {
  await axios({
    method: "POST",
    url: `${API_URL}developer/PostImage`,
    data: image,
    config: { header: { "Content-Type": "multipart/form-data" } },
  });
};

const postDeveloper = async (developer, image) => {
  const newDeveloper = {
    firstName: developer.firstName,
    lastName: developer.lastName,
    phone: developer.phone,
    jobTitle: developer.jobTitle,
    skills: developer.skills.join(","),
    dateOfBirth: new Date(developer.dateOfBirth).toISOString(),
    image: image.get("file").name,
  };
  console.log(newDeveloper);
  await axios.post(`${API_URL}developer`, newDeveloper);
  await postImage(image);
  await getDevelopers();
};

const jobTitles = [
  "Front-end utvikler",
  "Back-end utvikler",
  "Full-stack utvikler",
  "Interaksjonsdesigner",
  "Grafisk designer",
];

const skills = [
  "JavaScript",
  "Vue",
  "React",
  "Angular",
  "Node",
  "Express",
  "MongoDB",
  "Sass",
  "CSS",
  "TypeScript",
  "C#",
  ".NET",
  "Java",
  "Scrum",
  "Figma",
  "MySQL",
];

const getAll = computed(() => data.value);

export const useDevelopersService = () => {
  return {
    getAll,
    getDevelopers,
    jobTitles,
    skills,
    postDeveloper,
  };
};
