
import WordComponent from './components/FindWords/WordComponent.vue'
import HomeComponent from './components/Home/Home.vue'
import WorkComponent from './components/Work/Work.vue'

export const routes = [
    { path: '', component: HomeComponent},
    { path: '/findwords',  component: WordComponent},
    { path: '/projects', component: WorkComponent},
    
];