import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Contact from '../views/Contact.vue'
import CycleDeVie from '../views/CycleDeVie.vue'
import Props from '../views/01Props.vue'
import DifferentMenu from '../views/DifferentMenu.vue'
import Evenement from '../views/02Evenement.vue'
import Slots from '../views/03Slots.vue'
import Style from '../views/04Style.vue'
import Computed from '../views/05Computed.vue'
import Watchers from '../views/06Watchers.vue'
import EmettreEvenementParentEnfant from '../views/07EmettreEvenementParentEnfant.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/apropos',
      name: 'apropos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
      /*
        importer de manière dynamique appeler code-splitting est souvent appliqué 
        pour les composants moins fréquemment utilisés 
        ou nécessaires uniquement dans certaines situations.
      */
      component: () => import('../views/Apropos.vue')     
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/cycle',
      name: 'cycle',
      component: CycleDeVie
    },
    {
      path: '/props',
      name: 'props',
      component: Props
    },
    {
      path: '/different_menu',
      name: 'different_menu',
      component: DifferentMenu
    },
    {
      path: '/evenement',
      name: 'evenement',
      component: Evenement
    },
    {
      path:'/slots',
      name:'slots',
      component: Slots
    },
    {
      path:'/style',
      name:'style',
      component: Style
    },
    {
      path:'/computed',
      name:'computed',
      component: Computed
    },
    {
      path:'/watchers',
      name:'watchers',
      component: Watchers
    },
    {
      path: '/evenement_perso',
      name: 'evenement_perso',
      component: EmettreEvenementParentEnfant
    }

  ]
})

export default router
