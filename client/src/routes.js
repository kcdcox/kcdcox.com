
import WordComponent from './components/FindWords/WordComponent.vue'
import HomeComponent from './components/Home/Home.vue'
import WorkComponent from './components/Work/Work.vue'
import ContactComponent from './components/Contact/Contact.vue'

export const routes = [
    { path: '', component: HomeComponent},
    { path: '/findwords',  component: WordComponent},
    { path: '/work', component: WorkComponent},
    { path: '/contact', component: ContactComponent},
    
];