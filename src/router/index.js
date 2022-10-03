import { createRouter, createWebHashHistory } from 'vue-router'
import Emergencia from '@/views/Emergencia.vue'
import Entretenimento from '@/views/Entretenimento.vue'
import Restaurantes from '@/views/Restaurante.vue'
import Outros from '@/views/Outros.vue'
import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        component: Home
        
    },
    {
        path: '/emergencia',
        component: Emergencia
        
    },
    {
        path: '/entretenimento',
        component: Entretenimento
        
    },
    {
        path: '/restaurantes',
        component: Restaurantes
        
    },
    {
        path: '/outros',
        component: Outros
        
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
export default router