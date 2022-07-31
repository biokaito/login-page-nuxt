import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toolbar from 'primevue/toolbar';
import Image from 'primevue/image';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import Fieldset from 'primevue/fieldset';
import ProgressSpinner from 'primevue/progressspinner';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Toolbar', Toolbar);
    nuxtApp.vueApp.component('Image', Image);
    nuxtApp.vueApp.component('Password', Password);
    nuxtApp.vueApp.component('Divider', Divider);
    nuxtApp.vueApp.component('Fieldset', Fieldset);
    nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner);
});
