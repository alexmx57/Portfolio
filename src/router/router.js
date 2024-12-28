import APropos from "../views/APropos.vue"
import Home from "../views/Home.vue"
import Competencies from '../views/Competencies.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

import Audiovisuel from '../views/portfolio/Audiovisuel.vue'
import DeveloppementWeb from '../views/portfolio/DeveloppementWeb.vue'
import Graphisme from '../views/portfolio/Graphisme.vue'
import Tous from '../views/portfolio/Tous.vue'
import UIUX from '../views/portfolio/UIUX.vue'



import { createRouter, createWebHistory } from 'vue-router'




export const routes = [
    { path: '/', component: Home },
    { path: '/a-propos', component: APropos },
    { path: '/contact', component: Contact },
    { path: '/competences', component: Competencies },
    {
        path: '/portfolio',
        component: Portfolio,
        children: [
            { path: 'tous', component: Tous },
            { path: 'audiovisuel', component: Audiovisuel },
            { path: 'graphisme', component: Graphisme },
            { path: 'developpement-web', component: DeveloppementWeb },
            { path: 'UI-UX', component: UIUX },
        ]
    },
    {path: "/portfolio/:category/:id",component: ProjectDetails, },
]



const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router