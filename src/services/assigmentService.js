import { computed, ref } from 'vue';
import { API_URL } from '../config';
import { deleteData, getData, postData, putData } from '../helpers';

const data = ref([]);

const assignmentUrl = `${API_URL}assignment/`;

// Hent alle oppdrag
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
      assignment.team = null;
    }
    assignments.push(assignment);
  });
  data.value = assignments;
};

// Legg til oppdrag
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


// Rediger oppdrag
export const putAssignment = async (assignment) => {
  const currentAssignment = await getData(`${assignmentUrl}${assignment.id}`);

  const editedAssignment = {
    id: assignment.id,
    title: assignment.title,
    company: assignment.company,
    price: assignment.price,
    startDate: assignment.startDate,
    team: currentAssignment.team,
    completed: currentAssignment.completed,
  };

  await putData(assignmentUrl, editedAssignment);
  await getAssignments();
};

// Slett oppdrag
export const deleteAssignment = async (id) => {
  await deleteData(`${assignmentUrl}${id}`);
};

// Hent alle oppdrag
export const getAll = computed(() => data.value);

// Hent et oppdrag
export const getOne = (id) =>
  computed(() => data.value.find((assignment) => assignment.id === id));

// Slett oppdrag fra kunden
export const deleteAssignmentsFromCompany = async (company) => {
  const assignments = getAll.value.filter(
    (assignment) => +assignment.company === company.id
  );
  assignments.forEach(async (assignment) => {
    await deleteData(`${assignmentUrl}${assignment.id}`);
  });
};

// Legg til en utvikler på oppdraget
export const addDeveloperToAssignment = async (developerId, assignment) => {
  const currentAssignment = await getData(`${assignmentUrl}${assignment.id}`);
  if (!currentAssignment.team) currentAssignment.team = [];
  else currentAssignment.team = currentAssignment.team.split(',');
  currentAssignment.team.push(developerId + '');
  currentAssignment.team = currentAssignment.team.join();
  await putData(`${assignmentUrl}`, currentAssignment);
  await getAssignments();
};

// Fjern en utvikler fra oppdraget
export const removeDeveloperFromAssignment = async (
  developerId,
  assignment
) => {
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

// Hent antall oppdrag
export const numberOfAssignments = computed(() => data.value.length);

// Hent oppdrag basert på kunde
export const getAssignmentsFromCompany = (company) =>
  computed(() =>
    data.value.filter((assignment) => +assignment.company === company.id)
  );
