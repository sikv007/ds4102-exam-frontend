<template>
  <form @submit.prevent="submitForm" class="p-5">
    <div class="container">
      <div class="row">
        <h2 class="fw-bold mb-4">{{ title }}</h2>
        <div class="row">
          <div class="col mb-4">
            <label for="firstName" class="form-label">Fornavn</label>
            <input
              class="form-control"
              type="text"
              id="firstName"
              v-model="form.firstName"
              placeholder="Anders"
            />
          </div>
          <div class="col">
            <label for="lastName" class="form-label">Etternavn</label>
            <input
              class="form-control"
              type="text"
              id="lastName"
              v-model="form.lastName"
              placeholder="Nilsen"
            />
          </div>
        </div>
        <div class="row">
          <div class="col mb-4">
            <label for="phone" class="form-label">Mobilnummer</label>
            <input
              class="form-control"
              type="number"
              id="phone"
              v-model="form.phone"
              placeholder="48003000"
            />
          </div>
          <div class="col">
            <label for="date" class="form-label">Fødselsdato</label>
            <input
              class="form-control"
              type="date"
              id="date"
              v-model="form.dateOfBirth"
              placeholder="Fødselsdato"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="jobTitle" class="form-label">Stilling</label>
            <select class="form-select" v-model="form.jobTitle" id="jobTitle">
              <option
                v-for="jobTitle in developers.jobTitles"
                :key="jobTitle"
                :value="jobTitle"
              >
                {{ jobTitle }}
              </option>
            </select>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="image" class="form-label">Profilbilde</label>
              <input
                class="form-control"
                @change="setImage"
                type="file"
                id="image"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col mb-5">
            <div><label class="form-label">Ferdigheter</label></div>
            <div
              class="form-check form-check-inline"
              v-for="skill in developers.skills"
              :key="skill"
            >
              <label class="form-check-label" :for="skill">{{ skill }}</label>
              <input
                class="form-check-input"
                type="checkbox"
                :value="skill"
                :id="skill"
                v-model="form.skills"
              />
            </div>
          </div>
        </div>
        <base-button cta>{{ button }}</base-button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { useDevelopersService } from "../../services/developersService";
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

const developers = useDevelopersService();

const form = reactive({
  firstName: "",
  lastName: "",
  phone: null,
  dateOfBirth: null,
  jobTitle: developers.jobTitles[0],
  skills: [],
});

const image = new FormData();

const setImage = (e) => {
  image.delete("file");
  image.append("file", e.target.files[0]);
};

let developer;

if (props.id) {
  developer = developers.getOne(props.id);
  console.log(developer.value);
  form.firstName = developer.value.firstName;
  form.lastName = developer.value.lastName;
  form.dateOfBirth = developer.value.dateOfBirth;
  form.phone = developer.value.phone;
  form.skills = developer.value.skills;
  form.jobTitle = developer.value.jobTitle;
  form.id = developer.value.id;
}

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(["submit-form"]);

const submitForm = () => {
  if (form.firstName === "") return;
  emit("submit-form", form, image);
  modal.toggleFormModal();
};
</script>
