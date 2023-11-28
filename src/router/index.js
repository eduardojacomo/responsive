import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Pacientes from '../views/Pacientes.vue'
import ProfilePaciente from '../views/ProfilePaciente.vue'
import Sessao from '../views/Sessao.vue'
import ProtocoloTratamento from '../components/Forms/ProtocoloTratamento.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/protocolotratamento',
      name: 'protocolotratamento',
      component: ProtocoloTratamento
    },
    {
      path: '/pacientes',
      name: 'Pacientes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Pacientes
    },
    {
      path: '/profilepaciente/:id/',
      name: 'ProfilePaciente',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProfilePaciente,
      props: true,
    },
    {
      path: '/sessao',
      name: 'Sessao',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Sessao
    },
    {
      path: '/cadastropaciente/:id/',
      name: 'CadastroPaciente',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CadastroPaciente.vue'),
      props: true,
    },
    {
      path: '/financeiro',
      name: 'Financeiro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Financeiro.vue')
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Usuarios.vue'),
      props:true,
    }


  ]
})

export default router
