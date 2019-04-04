
import WordComponent from './components/FindWords/WordComponent.vue'
import HomeComponent from './components/Home/Home.vue'
import WorkComponent from './components/Projects/Projects.vue'
import Relativator from './components/FindWords/Relativator.vue'

export const routes = [
    { path: '', component: HomeComponent},
    { path: '/findwords',  component: WordComponent},
    { path: '/projects', component: WorkComponent},
    { path: '/relativator', component: Relativator},
    
];