<template>
  <BaseForm :title="title" @submit.prevent="submitForm">
    <div class="row">
      <div class="col mb-4">
        <label for="title" class="form-label">Produkt</label>
        <input
          class="form-control"
          type="text"
          id="title"
          v-model="form.product"
          placeholder="Ny nettside"
          required
        />
      </div>
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
    </div>
    <div class="row">
      <div class="col mb-4">
        <label for="price" class="form-label">Beløp</label>
        <input
          class="form-control"
          type="number"
          id="price"
          v-model.number="form.total"
          placeholder="400 000"
          min="1"
          required
        />
      </div>
      <div class="col mb-4">
        <label for="price" class="form-label">Dager til forfall</label>
        <input
          class="form-control"
          type="number"
          id="price"
          v-model.number="form.daysDue"
          placeholder="14"
          min="1"
          step="1"
          required
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
      <div class="col d-flex gap-4">
        <BaseButton :title="button" cta type="submit" />
        <BaseButton type="button" @click="closeForm" outline title="Avbryt" />
      </div>
    </div>
  </BaseForm>
</template>

<script setup>
import { reactive } from '@vue/reactivity';
import { companyList } from '../../services/companyService';
import * as modal from '../../services/modalService';
import { getOne, daysDue } from '../../services/invoiceService';

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
  company: companyList.value[0],
  product: '',
  daysDue: 14,
  total: null,
  error: 'pending',
  message: null,
});

let invoice;

// Sett data hvis man redigerer
if (props.id) {
  invoice = getOne(+props.id);
  form.product = invoice.value.product;
  form.total = invoice.value.total;
  form.daysDue = daysDue(invoice.value).value;
  form.id = invoice.value.id;
  form.company =
    companyList.value[companyList.value.indexOf(invoice.value.company)];
}

// Submit skjema
const submitForm = () => {
  if (form.product === '') return;
  emit('submit-form', form);
};

// Lukk skjema
const closeForm = () => {
  emit('close-form');
};
</script>
