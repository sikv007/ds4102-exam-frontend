<template>
  <BaseForm @submit.prevent="submitForm" :title="title">
    <div class="row">
      <div class="col mb-4">
        <label for="name" class="form-label">Navn</label>
        <input
          class="form-control"
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Bedrift AS"
        />
      </div>
      <div class="col mb-4">
        <label for="address" class="form-label">Adresse</label>
        <input
          class="form-control"
          type="text"
          id="address"
          v-model="form.address"
          placeholder="Kirkeveien 2, 0450 OSLO"
        />
      </div>
    </div>

    <div class="row">
      <div class="col mb-4">
        <label for="contactName" class="form-label">Kontaktperson</label>
        <input
          class="form-control"
          type="text"
          id="contactName"
          v-model="form.contactName"
          placeholder="Siri Jensen"
        />
      </div>
      <div class="col mb-4">
        <label for="contactEmail" class="form-label">E-post</label>
        <input
          class="form-control"
          type="email"
          id="contactEmail"
          v-model="form.contactEmail"
          placeholder="sirijensen@bedrift.no"
        />
      </div>
    </div>

    <div class="row">
      <div class="col mb-4">
        <label for="organizationNumber" class="form-label"
          >Organisasjonsnummer</label
        >
        <input
          class="form-control"
          type="number"
          id="organizationNumber"
          v-model.number="form.organizationNumber"
          placeholder="48003000"
        />
      </div>
      <div class="col">
        <div class="mb-4">
          <label for="image" class="form-label">Logo</label>
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
      <div class="col d-flex gap-4">
        <BaseButton type="submit" cta :title="button" />
        <BaseButton type="button" @click="closeForm" outline title="Avbryt" />
      </div>
    </div>
  </BaseForm>
</template>

<script setup>
// Service
import { reactive } from '@vue/reactivity';
import { getOne } from '../../services/companyService';
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
  name: '',
  address: '',
  contactName: '',
  contactEmail: '',
  organizationNumber: null,
});

const image = new FormData();

const setImage = (e) => {
  image.delete('file');
  image.append('file', e.target.files[0]);
};

let company;

// Sett verdier i skjema hvis man rediger
if (props.id) {
  company = getOne(props.id);
  form.name = company.value.name;
  form.address = company.value.address;
  form.contactName = company.value.contactName;
  form.contactEmail = company.value.contactEmail;
  form.organizationNumber = company.value.organizationNumber;
  form.id = company.value.id;
}

// Submit skjema
const submitForm = () => {
  if (form.name === '') return;
  emit('submit-form', form, image);
};

// Lukk skjema
const closeForm = () => {
  emit('close-form');
};
</script>
