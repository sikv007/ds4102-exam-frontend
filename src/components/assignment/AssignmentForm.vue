<template>
  <form @submit.prevent="submitForm" class="p-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="fw-bold mb-4">{{ title }}</h2>
        </div>
        <div class="row">
          <div class="col mb-4">
            <label for="title" class="form-label">Tittel</label>
            <input
              class="form-control"
              type="text"
              id="title"
              v-model="form.title"
              placeholder="Ny nettside for Høyskolen Kristiania"
            />
          </div>
        </div>
        <div class="row">
          <div class="col mb-4">
            <label for="company" class="form-label">Kunde</label>
            <select class="form-select" v-model="form.company" id="company">
              <option
                v-for="company in companies.companyList"
                :key="company"
                :value="company"
              >
                {{ company }}
              </option>
            </select>
          </div>
          <div class="col mb-4">
            <label for="price" class="form-label">Pris</label>
            <input
              class="form-control"
              type="number"
              id="price"
              v-model.number="form.price"
              placeholder="400 000"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div
              v-if="form.error !== 'pending'"
              class="alert alert-danger"
              role="alert"
            >
              {{ form.message }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <base-button cta>{{ button }}</base-button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { useAssignmentService } from "../../services/assigmentService";
import { useCompanyService } from "../../services/companyService";
import { useModalService } from "../../services/modalService";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: {
    type: String,
  },
  button: {
    type: String,
  },
  currentDeveloper: {
    type: Object,
  },
  id: {
    type: Number,
  },
});

const modal = useModalService();

// const developers = useDeveloperService();

const companies = useCompanyService();

const assignments = useAssignmentService();

const form = reactive({
  title: "",
  company: companies.companyList[0],
  price: null,
  error: "pending",
  message: null,
});

let assignment;

if (props.id) {
  console.log(props.id);
  assignment = assignments.getOne(+props.id);
  form.title = assignment.value.title;
  form.price = assignment.value.price;
  form.id = assignment.value.id;
  form.startDate = assignment.value.startDate
  form.company =
    companies.companyList[
      companies.companyList.indexOf(assignment.value.company)
    ];
}

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(["submit-form"]);

const submitForm = () => {
  if (form.firstName === "") return;
  emit("submit-form", form);
  modal.toggleFormModal();
};
</script>
