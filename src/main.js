import { createApp } from 'vue'
import App from './App.vue'
import VuePlyr from '../node_modules/@skjnldsv/vue-plyr'
// import PlyrControls from './js/plyr-controls'
import 'bootstrap'

createApp(App)
    .use(VuePlyr, { 
        plyr: { 
        } 
    })
    .mount('#app')
