import { createApp } from 'vue'
import App from './App.vue'
import VuePlyr from '../node_modules/@skjnldsv/vue-plyr'
import 'bootstrap'

createApp(App)
    .use(VuePlyr, { 
        plyr: { controls: ['play', 'mute', 'volume'] } 
    })
    .mount('#app')
