import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHistory} from 'vue-router'
import LogIn from "./components/Login.vue";
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'
const routes=[
  {
    name:"Home",
    component:HomePage,
    path:'/'
  },
  {
    name:"SignUp",
    component:SignUp,
    path:'/signup'
  },
  {
    name:"Login",
    component:LogIn,
    path:'/login'
  },
  {
    name:"Add",
    component:AddRestaurant,
    path:'/add'
  },
  {
    name:"Update",
    component:UpdateRestaurant,
    path:'/update/:id'
  },
]

const router=createRouter({
  history:createWebHistory(),
  routes
})

export default router