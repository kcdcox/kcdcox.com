
import WordComponent from './components/FindWords/WordComponent.vue'
import HomeComponent from './components/Home/Home.vue'
import WorkComponent from './components/Projects/Projects.vue'
import BlogComponent from './components/Blog/Blog.vue'

export const routes = [
    { path: '', component: HomeComponent},
    { path: '/findwords',  component: WordComponent},
    { path: '/projects', component: WorkComponent},
    { path: '/blog', component: BlogComponent},
    
];