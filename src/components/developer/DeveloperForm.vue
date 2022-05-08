<template>
  <BaseForm @submit.prevent="submitForm" :title="title">
    <div class="row">
      <div class="col mb-4">
        <label for="firstName" class="form-label">Fornavn</label>
        <input
          class="form-control"
          type="text"
          id="firstName"
          v-model="form.firstName"
          placeholder="Anders"
          required
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
          required
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
          minlength="8"
          required
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
          max="2020-01-01"
          required
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
            :required="!edit"
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
    <div class="row pt-4">
      <div class="col d-flex gap-4">
        <BaseButton type="submit" cta :title="button" />
        <BaseButton type="button" @click="closeForm" outline title="Avbryt" />
      </div>
    </div>
  </BaseForm>
</template>

<script setup>
// Service
import { reactive, ref, watch } from 'vue';
import { jobTitles, getOne, skills } from '../../services/developerService';
import * as modal from '../../services/modalService';

// Props
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

// Emits
const emit = defineEmits(['submit-form', 'close-form']);

const form = reactive({
  firstName: '',
  lastName: '',
  phone: null,
  dateOfBirth: null,
  jobTitle: jobTitles[0],
  skills: [],
  message: null,
});

const edit = ref(false);

const image = new FormData();

const setImage = (e) => {
  image.delete('file');
  image.append('file', e.target.files[0]);
};

let developer;

// Sett verdier i skjema hvis man redigerer
if (props.id) {
  edit.value = true;
  developer = getOne(props.id);
  form.firstName = developer.value.firstName;
  form.lastName = developer.value.lastName;
  form.dateOfBirth = developer.value.dateOfBirth;
  form.phone = developer.value.phone;
  form.skills = developer.value.skills;
  form.jobTitle = developer.value.jobTitle;
  form.id = developer.value.id;
}

const submitForm = () => {
  emit('submit-form', form, image);
};

const closeForm = () => {
  emit('close-form');
};
</script>
