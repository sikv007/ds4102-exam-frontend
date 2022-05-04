import axios from 'axios';
import { computed, ref } from 'vue';
import { API_URL, HOST } from '../config';
import { deleteData, getData, postData, postImage, putData } from '../helpers';

const data = ref([]);
const developerUrl = `${API_URL}developer/`;

export const getDevelopers = async () => {
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
      skills: dev.skills?.split(',') || null,
      dateOfBirth: dev.dateOfBirth,
      image: `${HOST}src/img/developer/${dev.image}`,
    };
    devs.push(developer);
  });
  data.value = devs;
};

export const postDeveloperImage = async (image) => {
  await postImage(developerUrl, image);
};

export const postDeveloper = async (developer, image) => {
  const newDeveloper = {
    firstName: developer.firstName,
    lastName: developer.lastName,
    phone: developer.phone,
    jobTitle: developer.jobTitle,
    skills: developer.skills.join(','),
    dateOfBirth: developer.dateOfBirth,
    image: image.get('file').name,
  };
  await postData(developerUrl, newDeveloper);
  await postDeveloperImage(image);
  await getDevelopers();
};

export const putDeveloper = async (developer, image) => {
  const editedDeveloper = {
    id: developer.id,
    firstName: developer.firstName,
    lastName: developer.lastName,
    phone: developer.phone,
    jobTitle: developer.jobTitle,
    skills: developer.skills.join(','),
    dateOfBirth: developer.dateOfBirth,
  };
  const currentImage = getOne(developer.id).value.image;
  if (!image.get('file')) {
    editedDeveloper.image = currentImage.slice(
      currentImage.lastIndexOf('/') + 1
    );
  } else {
    editedDeveloper.image = image.get('file').name;
  }
  await putData(developerUrl, editedDeveloper);
  if (image.get('file')) await postDeveloperImage(image);
  await getDevelopers();
};

export const deleteDeveloper = async (id) => {
  await deleteData(`${developerUrl}${id}`);
};

export const jobTitles = [
  'Front-end utvikler',
  'Back-end utvikler',
  'Full-stack utvikler',
  'Interaksjonsdesigner',
  'Grafisk designer',
];

export const skills = [
  'JavaScript',
  'Vue',
  'React',
  'Angular',
  'Node',
  'Express',
  'MongoDB',
  'Sass',
  'CSS',
  'TypeScript',
  'C#',
  '.NET',
  'Java',
  'Scrum',
  'Figma',
  'MySQL',
];

export const getAll = computed(() => data.value);

export const getOne = (id) =>
  computed(() => data.value.find((developer) => developer.id === id));

export const fullName = (developer) =>
  computed(() => `${developer.firstName} ${developer.lastName}`);

export const dateOfBirth = (developer) =>
  computed(() => new Date(developer.dateOfBirth).toLocaleDateString('no-NB'));

export const getAvailableDevelopers = computed(() =>
  data.value.filter((developer) => !developer.assignment)
);

export const addAssignmentToDeveloper = async (id, assignment) => {
  const developer = await getData(`${developerUrl}${id}`);
  developer.assignment = assignment.id;
  await putData(`${developerUrl}`, developer);
  await getDevelopers();
};

export const removeAssignmentFromDeveloper = async (id) => {
  const developer = await getData(`${developerUrl}${id}`);
  developer.assignment = null;
  await putData(`${developerUrl}`, developer);
  await getDevelopers();
};

export const numberOfDevs = computed(() => data.value.length);

export const devsOnAssignment = computed(() =>
  data.value.filter((dev) => dev.assignment).length
);

export const developerAvailable = (developer) => {
  return computed(() => {
    return !developer.assignment
      ? {
          class: { 'availability--available': true },
          text: 'Ledig for oppdrag',
        }
      : { class: { 'availability--unavailable': true }, text: 'På oppdrag' };
  }).value;
};

export const getDevelopersFromAssignment = (assignment) =>
  computed(() =>
    data.value.filter((developer) => developer.assignment === assignment)
  );
