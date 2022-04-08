<template>
  <form @submit.prevent class="p-5">
    <div class="container">
      <div class="row">
        <h2 class="fw-bold mb-4">Legg til utvikler</h2>
        <div class="row">
          <div class="col mb-4">
            <label for="firstName" class="form-label">Fornavn</label>
            <input
              class="form-control"
              type="text"
              id="firstName"
              placeholder="Anders"
            />
          </div>
          <div class="col">
            <label for="lastName" class="form-label">Etternavn</label>
            <input
              class="form-control"
              type="text"
              id="lastName"
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
              placeholder="48003000"
            />
          </div>
          <div class="col">
            <label for="date" class="form-label">Fødselsdato</label>
            <input
              class="form-control"
              type="date"
              id="date"
              placeholder="Fødselsdato"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="jobTitle" class="form-label">Stilling</label>
            <select class="form-select" id="jobTitle">
              <option value="1">Back-end utvikler</option>
              <option value="2">Front-end utvikler</option>
              <option value="5">Full-stack utvikler</option>
              <option value="3">Interaksjonsdesigner</option>
              <option value="4">Grafisk Designer</option>
            </select>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="image" class="form-label">Profilbilde</label>
              <input class="form-control" type="file" id="image" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col mb-5">
            <div class="form-check form-check-inline">
              <label class="form-check-label" for="inlineRadio1">1</label>
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
            </div>
          </div>
        </div>

        <base-button>Legg til</base-button>
      </div>
    </div>
  </form>
</template>
