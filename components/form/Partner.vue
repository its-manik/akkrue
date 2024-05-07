<template>
  <div>
    <div v-if="formMeta.sent">
      <p class="bg-green-100 border-green-600 p-12 text-center">
        Thank you for your request. We will process it as soon as possible and contact
        you.
      </p>
    </div>

    <FormKit v-else type="form" ref="formular" :actions="false" @submit="submit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div class="grid-col">
          <FormKit
            type="text"
            name="firstname"
            id="firstname"
            label="First Name"
            v-model="form.firstname"
            validation="required"
          />
        </div>
        <div class="grid-col">
          <FormKit
            type="text"
            name="lastname"
            id="lastname"
            label="Last Name"
            v-model="form.lastname"
            validation="required"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div class="grid-col">
          <FormKit
            type="email"
            name="email"
            id="email"
            label="Email"
            v-model="form.email"
            validation="required|email"
          />
        </div>

        <div class="grid-col">
          <FormKit
            type="text"
            name="company"
            id="company"
            label="Company"
            v-model="form.company"
            validation="required"
          />
        </div>
      </div>

      <FormKit name="address" type="hidden" v-model="form.address" />

      <p class="uppercase text-xs text-black mb-4">Your Message</p>
      <FormKit type="textarea" rows="4" v-model="form.message" />

      <ul v-if="formMeta.errorMessage" class="formkit-messages mb-5" aria-live="polite">
        <li class="formkit-message" data-message-type="validation">
          {{ form.errorMessage }}
        </li>
      </ul>

      <a
        @click.prevent="saveForm"
        :disabled="loading"
        class="mt-8 btn btn-primary text-white inline-block"
      >
        <ElementLoading v-if="loading" />
        send
      </a>
    </FormKit>
  </div>
</template>

<script setup lang="ts">
const { sendPartnerForm } = useMail();
const loading = ref(false);
const formular = ref(null);
const formMeta = ref({
  errorMessage: null,
  sent: false,
});

function resetForm() {
  form.value = {
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    message: "",
    address: "",
  };
}

const form = ref({
  firstname: "",
  lastname: "",
  email: "",
  company: "",
  message: "",
  address: "",
});

function saveForm() {
  const node = formular.value.node;
  node.submit();
}

async function submit() {
  console.log("Submitted");

  loading.value = true;

  const { data, error } = await sendPartnerForm(form.value);
  if (data) {
    console.log("Success: ", data);
    formMeta.value.sent = true;
    // email.value = { name: "", email: "", message: "" };
  } else {
    formMeta.value.errorMessage = error;
  }
  loading.value = false;
  // formMeta.value.sent = true;
}
</script>
