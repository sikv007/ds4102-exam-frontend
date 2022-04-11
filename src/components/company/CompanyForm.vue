<template>
  <form @submit.prevent="submitForm" class="p-5">
    <div class="container">
      <div class="row">
        <h2 class="fw-bold mb-4">{{ title }}</h2>
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
            <label for="organizationNumber" class="form-label">Organisasjonsnummer</label>
            <input
              class="form-control"
              type="number"
              id="organizationNumber"
              v-model="form.organizationNumber"
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
        <base-button cta>{{ button }}</base-button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { useDeveloperService } from "../../services/developerService";
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

const developers = useDeveloperService();

const form = reactive({
  name: "",
  contactName: "",
  contactEmail: "",
  organizationNumber: null,
});

const image = new FormData();

const setImage = (e) => {
  image.delete("file");
  image.append("file", e.target.files[0]);
};

let company;

if (props.id) {
  company = company.getOne(props.id);
  form.name = company.name;
  form.contactName = company.contactName;
  form.contactEmail = company.contactEmail;
  form.id = company.value.id;
}

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(["submit-form"]);

const submitForm = () => {
  if (form.firstName === "") return;
  emit("submit-form", form, image);
  modal.toggleFormModal();
};
</script>
