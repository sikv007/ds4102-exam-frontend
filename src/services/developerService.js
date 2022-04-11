import axios from "axios";
import { computed, ref } from "vue";
import { API_URL, HOST } from "../config";
import { deleteData, getData, postData, postImage, putData } from "../helpers";
const data = ref([]);

const developerUrl = `${API_URL}developer/`;

const getDevelopers = async () => {
  const res = await getData(developerUrl);
  const devs = [];
  res.forEach((dev) => {
    const developer = {
      id: dev.id,
      firstName: dev.firstName,
      lastName: dev.lastName,
      jobTitle: dev.jobTitle,
      assignment: dev.assignment,
      phone: dev.phone,
      email: dev.email,
      skills: dev.skills.split(","),
      dateOfBirth: dev.dateOfBirth,
      image: `${HOST}src/img/developer/${dev.image}`,
    };
    devs.push(developer);
  });
  data.value = devs;
};

const postDeveloperImage = async (image) => {
  await postImage(developerUrl, image);
};

const postDeveloper = async (developer, image) => {
  const newDeveloper = {
    firstName: developer.firstName,
    lastName: developer.lastName,
    phone: developer.phone,
    jobTitle: developer.jobTitle,
    skills: developer.skills.join(","),
    dateOfBirth: developer.dateOfBirth,
    image: image.get("file").name,
  };
  await postData(developerUrl, newDeveloper);
  await postDeveloperImage(image);
  await getDevelopers();
};

const putDeveloper = async (developer, image) => {
  const editedDeveloper = {
    id: developer.id,
    firstName: developer.firstName,
    lastName: developer.lastName,
    phone: developer.phone,
    jobTitle: developer.jobTitle,
    skills: developer.skills.join(","),
    dateOfBirth: developer.dateOfBirth,
  };
  const currentImage = getOne(developer.id).value.image;
  if (!image.get("file")) {
    editedDeveloper.image = currentImage.slice(
      currentImage.lastIndexOf("/") + 1
    );
  } else {
    editedDeveloper.image = image.get("file").name;
  }
  await putData(developerUrl, editedDeveloper);
  if (image.get("file")) await postDeveloperImage(image);
  await getDevelopers();
};

const deleteDeveloper = async (id) => {
  await deleteData(`${developerUrl}${id}`);
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

const getOne = (id) => {
  const developer = computed(() =>
    data.value.find((developer) => developer.id === id)
  );
  return developer;
};

const fullName = (developer) => {
  const name = computed(() => `${developer.firstName} ${developer.lastName}`);
  return name.value;
};

const developerAvailable = (developer) => {
  return computed(() => {
    return !developer.assignment
      ? {
          class: { "availability--available": true },
          text: "Ledig for oppdrag",
        }
      : { class: { "availability--unavailable": true }, text: "På oppdrag" };
  }).value;
};

export const useDeveloperService = () => {
  return {
    getAll,
    getDevelopers,
    jobTitles,
    skills,
    postDeveloper,
    getOne,
    fullName,
    putDeveloper,
    developerAvailable,
    deleteDeveloper,
  };
};
