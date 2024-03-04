import './assets/main.css'

import { createApp, markRaw } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// import ThemeSwitcher from './components/ThemeSwitcher.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faAddressCard} from '@fortawesome/free-solid-svg-icons'
import { faCalendar} from '@fortawesome/free-solid-svg-icons'
import { faMoneyBills} from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faNotesMedical} from '@fortawesome/free-solid-svg-icons'
import { faCoins} from '@fortawesome/free-solid-svg-icons'
import { faComments} from '@fortawesome/free-solid-svg-icons'
import { faListCheck} from '@fortawesome/free-solid-svg-icons'
import { faInbox} from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { faClock} from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faFilter} from '@fortawesome/free-solid-svg-icons'
import { faUserPen} from '@fortawesome/free-solid-svg-icons'
import { faIdBadge} from '@fortawesome/free-solid-svg-icons'
import { faUserPlus, faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'
import { faTable, faList, faCircleXmark, faPlus, faGear} from '@fortawesome/free-solid-svg-icons'
import {faFileImage} from '@fortawesome/free-regular-svg-icons'

library.add(faBell, faSliders, faHouse, faAddressCard, faCalendar, faMoneyBills, faMagnifyingGlass, 
    faNotesMedical, faCoins, faComments, faListCheck, faInbox, faCircleCheck, faClock, faBars, faFilter, 
    faUserPen, faIdBadge, faUserPlus, faTable, faList, faCircleXmark, faFileImage, faPlus, faGear, faCaretDown, faCaretUp)

const pinia = createPinia()
pinia.use(({store})=>{
    store.router = markRaw(router);
} )
const app = createApp(App)

app.use(router)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
