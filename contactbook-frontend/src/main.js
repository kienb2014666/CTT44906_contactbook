import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";

// Import CSS files
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

// Create Vue app instance and mount it
createApp(App)
  .use(router)
  .mount('#app');
