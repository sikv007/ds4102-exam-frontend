<template>
  <form @submit.prevent="submitForm" class="p-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="fw-bold mb-4">{{ title }}</h2>
        </div>
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
              placeholder="98765432"
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
                v-for="jobTitle in jobTitles"
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
              v-for="skill in skills"
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
            <BaseButton cta :title="button" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useValidate } from '../../hooks/useInput';
import { reactive } from '@vue/reactivity';
import { jobTitles, getOne, skills } from '../../services/developerService';
import * as modal from '../../services/modalService';

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

const form = reactive({
  firstName: '',
  lastName: '',
  phone: null,
  dateOfBirth: null,
  jobTitle: jobTitles[0],
  skills: [],
  error: 'pending',
  message: null,
});


const image = new FormData();

const setImage = (e) => {
  image.delete('file');
  image.append('file', e.target.files[0]);
};

let developer;

// Sett utvikler hvis man redigerer
if (props.id) {
  developer = getOne(props.id);
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
const emit = defineEmits(['submit-form']);

const submitForm = () => {
  emit('submit-form', form, image);
  modal.toggleFormModal();
};
</script>
