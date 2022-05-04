<template>
  <BaseForm @submit.prevent="submitForm" :title="title">
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
            v-for="company in companyList"
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
        <BaseButton type="submit" cta :title="button" />
        <BaseButton type="button" outline @click="closeForm" title="Avbryt" />
      </div>
    </div>
  </BaseForm>
</template>

<script setup>
// Service
import { reactive } from '@vue/reactivity';
import { getOne } from '../../services/assigmentService';
import { companyList } from '../../services/companyService';

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
  title: '',
  company: companyList.value[0],
  price: null,
  error: 'pending',
  message: null,
});

let assignment;

// Sett verdier i skjema hvis man redigerer oppdrag
if (props.id) {
  assignment = getOne(+props.id);
  form.title = assignment.value.title;
  form.price = assignment.value.price;
  form.id = assignment.value.id;
  form.startDate = assignment.value.startDate;
  form.company =
    companyList.value[companyList.value.indexOf(assignment.value.company)];
}

// Submit Skjema
const submitForm = () => {
  if (form.title === '') return;
  emit('submit-form', form);
};

// Lukk skjema
const closeForm = () => emit('close-form');
</script>
