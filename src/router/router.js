import HomePage from "../views/HomePage.vue"
import APropos from "../views/APropos.vue"
import MyPortfolio from '../views/MyPortfolio.vue'
import MyContact from '../views/MyContact.vue'
import MyCompetencies from '../views/MyCompetencies.vue'
import { createRouter, createWebHistory } from 'vue-router'


import C_Audiovisuel from '../views/portfolio/C_Audiovisuel.vue'
import C_Graphisme from '../views/portfolio/C_Graphisme.vue'
import C_DeveloppementWeb from '../views/portfolio/C_DeveloppementWeb.vue'
import C_UIUX from '../views/portfolio/C_UIUX.vue'



export const routes = [
    { path: '/', component: HomePage },
    { path: '/aPropos', component: APropos },
    { path: '/contact', component: MyContact },
    { path: '/competences', component: MyCompetencies },
    {
        path: '/portfolio',
        component: MyPortfolio,
        children: [
            { path: 'audiovisuel', component: C_Graphisme },
            { path: 'graphisme', component: C_Audiovisuel },
            { path: 'developpementWeb', component: C_DeveloppementWeb },
            { path: 'uiux', component: C_UIUX }
        ]
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router