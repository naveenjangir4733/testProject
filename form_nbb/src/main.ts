import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import './css/main.css'

import {createPinia} from 'pinia'
import {loadFonts} from './plugins/webfontloader'

loadFonts()


const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(pinia)
app.component('VueDatePicker', VueDatePicker);
app.use(VueSweetalert2)
app.mount('#app')
