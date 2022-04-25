import axios from 'axios';
import { computed, ref } from 'vue';
import { API_URL, HOST } from '../config';
import { deleteData, getData, postData, putData } from '../helpers';

const data = ref([]);

const assignmentUrl = `${API_URL}assignment/`;

export const getAssignments = async () => {
  const res = await getData(assignmentUrl);
  const assignments = [];
  res.forEach((el) => {
    const assignment = {
      id: el.id,
      title: el.title,
      company: el.company,
      startDate: el.startDate,
      endDate: el.endDate,
      price: el.price,
      team: el.team?.split(',') || null,
      completed: el.completed,
    };
    if (assignment.team && assignment.team[0] === '') {
      assignment.team = null
    }
    assignments.push(assignment);
  });
  console.log(assignments);
  data.value = assignments;
};

export const postAssignment = async (assignment) => {
  const newAssignment = {
    title: assignment.title,
    company: assignment.company,
    price: assignment.price,
    startDate: new Date().toISOString(),
  };
  await postData(assignmentUrl, newAssignment);
  await getAssignments();
};

export const putAssignment = async (assignment) => {
  const currentAssignment = await getData(`${assignmentUrl}${assignment.id}`);
  console.log(currentAssignment);

  const editedAssignment = {
    id: assignment.id,
    title: assignment.title,
    company: assignment.company,
    price: assignment.price,
    startDate: assignment.startDate,
    team: currentAssignment.team,
    completed: currentAssignment.completed,
  };

  console.log(editedAssignment);

  await putData(assignmentUrl, editedAssignment);
  await getAssignments();
};

export const deleteAssignment = async (id) => {
  await deleteData(`${assignmentUrl}${id}`);
};

export const getAll = computed(() => data.value);

export const getOne = (id) =>
  computed(() => data.value.find((assignment) => assignment.id === id));

export const deleteAssignmentsFromCompany = async (company) => {
  const assignments = getAll.value.filter(
    (assignment) => assignment.company === company.name
  );
  assignments.forEach(async (assignment) => {
    await deleteData(`${assignmentUrl}${assignment.id}`);
  });
};

export const addDeveloperToAssignment = async (developerId, assignment) => {
  const currentAssignment = await getData(`${assignmentUrl}${assignment.id}`);
  if (!currentAssignment.team) currentAssignment.team = [];
  else currentAssignment.team = currentAssignment.team.split(',');
  currentAssignment.team.push(developerId + '');
  currentAssignment.team = currentAssignment.team.join();
  await putData(`${assignmentUrl}`, currentAssignment);
  await getAssignments();
};

export const removeDeveloperFromAssignment = async (
  developerId,
  assignment
) => {
  console.log(assignment);
  const currentAssignment = await getData(`${assignmentUrl}${assignment.id}`);
  currentAssignment.team = currentAssignment.team.split(',');
  currentAssignment.team.splice(
    currentAssignment.team.indexOf(developerId + ''),
    1
  );
  currentAssignment.team = currentAssignment.team.join();
  await putData(`${assignmentUrl}`, currentAssignment);
  await getAssignments();
};

export const price = (price) =>
  computed(() => new Intl.NumberFormat('nb-NO').format(price));

export const getAssignmentsFromCompany = (company) =>
  computed(() =>
    data.value.filter((assignment) => assignment.company === company.name)
  );
