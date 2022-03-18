import { createApp } from 'vue'
import App from './App.vue'

import VuePlyr from '../node_modules/@skjnldsv/vue-plyr'
import '../node_modules/@skjnldsv/vue-plyr/dist/dist/vue-plyr.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
    .use(VuePlyr, { 
        plyr: { controls: ['play', 'mute', 'volume'] } 
    })
    .mount('#app')
