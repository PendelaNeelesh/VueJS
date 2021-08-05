import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Login from '../views/Login.vue'
import InternsList from '../views/InternsList.vue'
import AddInterns from '../views/AddInterns.vue'
import ManageInterns from '../views/Manage.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/internslist',
    name: 'InternsList',
    component: InternsList
  },
  {
    path: '/makeintern',
    name: 'AddInterns',
    component: AddInterns
  },
  {
    path: '/managerlist',
    name: 'ManageInterns',
    component: ManageInterns
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
