import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import './assets/login.css'
import './assets/custom.css'
import './assets/fontawesome-free/css/all.min.css'
import './assets/style.css'
import './assets/login.css'
import './assets/js/vendor/jquery/jquery.min.js'
import './assets/js/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './assets/js/sb-admin-2.min.js'


const app = createApp(App)
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHn0vND8pcdJEirkCshp2hasTkG57vDIw",
    authDomain: "air-quality-763ec.firebaseapp.com",
    databaseURL: "https://air-quality-763ec-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "air-quality-763ec",
    storageBucket: "air-quality-763ec.appspot.com",
    messagingSenderId: "349107835806",
    appId: "1:349107835806:web:b5a6c5368f8af6b493bc8f",
    measurementId: "G-6TLPLB4H2H"
  };

initializeApp(firebaseConfig);
app.use(router)

app.mount('#app');

