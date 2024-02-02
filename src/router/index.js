import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Pacientes from '../views/Pacientes.vue'
import ProfilePaciente from '../views/ProfilePaciente.vue'
import Sessao from '../views/Sessao.vue'
import ProtocoloTratamento from '../components/Forms/ProtocoloTratamento.vue'
import Usuarios from '../views/Usuarios.vue'
import CadastroPaciente from '../views/CadastroPaciente.vue'

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
      path: '/usuarios',
      name: 'usuarios',
      component: Usuarios
    },
    {
      path: '/pacientes',
      name: 'Pacientes',
      component: Pacientes
    },
    {
      path: '/profilepaciente/:id/',
      name: 'ProfilePaciente',
      component: ProfilePaciente,
      props: true,
    },
    {
      path: '/sessao',
      name: 'Sessao',
      component: Sessao
    },
    {
      path: '/cadastropaciente/:id/',
      name: 'CadastroPaciente',
      props: true,
      component: CadastroPaciente
    },
    {
      path: '/financeiro',
      name: 'Financeiro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Financeiro.vue')
    }


  ]
})

export default router
