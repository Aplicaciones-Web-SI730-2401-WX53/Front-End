import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import i18n from '@/locale/i18n.js'

const app = createApp(App)

app.use(PrimeVue)
app.component('pv-button', Button)
app.component('pv-input-text', InputText)

app.use(i18n)
app.mount('#app')
