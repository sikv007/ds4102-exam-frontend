import axios from "axios";
import { computed, ref } from "vue";
import { API_URL, HOST } from "../config";
import { deleteData, getData, postData, putData } from "../helpers";

const data = ref([]);

const assignmentUrl = `${API_URL}assignment/`;

const getAssignments = async () => {
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
      team: el.team?.split(",") || null,
      completed: el.completed,
    };
    assignments.push(assignment);
  });
  data.value = assignments;
};

const postAssignment = async (assignment) => {
  const newAssignment = {
    title: assignment.title,
    company: assignment.company,
    price: assignment.price,
    startDate: new Date().toISOString(),
  };
  await postData(assignmentUrl, newAssignment);
  await getAssignments();
};

const putAssignment = async (assignment) => {
  const currentAssignment = await getData(`${assignmentUrl}${assignment.id}`);
  console.log(currentAssignment);

  const editedAssignment = {
    id: assignment.id,
    title: assignment.title,
    company: assignment.company,
    price: assignment.price,
    startDate: assignment.startDate,
    team: currentAssignment.team,
    completed: currentAssignment.completed
  };

  console.log(editedAssignment);

  await putData(assignmentUrl, editedAssignment);
  await getAssignments();
};

// const deleteCompany = async (id) => {
//   await deleteData(`${assignmentUrl}${id}`);
// };

const getAll = computed(() => data.value);

const getOne = (id) =>
  computed(() => data.value.find((assignment) => assignment.id === id));

const deleteAssignmentsFromCompany = async (company) => {
  const assignments = getAll.value.filter(
    (assignment) => assignment.company === company.name
  );
  assignments.forEach(async (assignment) => {
    await deleteData(`${assignmentUrl}${assignment.id}`);
  });
};

const addDeveloperToAssignment = async (developerId, assignment) => {
  const currentAssignment = await getData(`${assignmentUrl}${assignment.id}`);
  if (!currentAssignment.team) currentAssignment.team = [];
  else currentAssignment.team = currentAssignment.team.split(",");
  currentAssignment.team.push(developerId + "");
  currentAssignment.team = currentAssignment.team.join();
  await putData(`${assignmentUrl}`, currentAssignment);
  await getAssignments();
};

const removeDeveloperFromAssignment = async (developerId, assignment) => {
  const currentAssignment = await getData(`${assignmentUrl}${assignment.id}`);
  currentAssignment.team = currentAssignment.team.split(",");
  currentAssignment.team.splice(
    currentAssignment.team.indexOf(developerId + ""),
    1
  );
  currentAssignment.team = currentAssignment.team.join();
  await putData(`${assignmentUrl}`, currentAssignment);
  await getAssignments();
};

const price = (price) =>
  computed(() => new Intl.NumberFormat("nb-NO").format(price));

const getAssignmentsFromCompany = (company) =>
  computed(() =>
    data.value.filter((assignment) => assignment.company === company.name)
  );

export const useAssignmentService = () => {
  return {
    getAssignments,
    postAssignment,
    getAll,
    getOne,
    deleteAssignmentsFromCompany,
    addDeveloperToAssignment,
    removeDeveloperFromAssignment,
    getAssignmentsFromCompany,
    price,
    putAssignment,
  };
};
