import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import {library} from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {faAddressCard} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faFacebook);
library.add(faGithub);
library.add(faInstagram);
library.add(faAddressCard);


createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icon',FontAwesomeIcon)
    .mount('#app');