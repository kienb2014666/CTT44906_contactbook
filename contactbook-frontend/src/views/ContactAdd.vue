<template>
    <div class="page">
      <ContactForm
        :contact="contact"
        @submit:contact="addContact"
        @delete:contact="deleteContact"
      />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import ContactForm from '../components/ContactForm.vue';
  import ContactService from '../../services/contact.service';
  
  export  default {
    components: {
      ContactForm,
    },
    data() {
      return {
        contact: {
          name: '',
          email: '',
          address: '',
          phone: '',
          favorite: false 
        },
        message: "",
      };
    },
    methods: {
      async addContact(data) {
        try {
          await ContactService.create(data);
          this.message = "Liên hệ được tạo thành công.";
          this.contact = {
            name: '',
            email: '',
            address: '',
            phone: '',
            favorite: false
          };
        } catch(error) {
          console.log(error);
        }
      },
    },
  };
  </script>
  