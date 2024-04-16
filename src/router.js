import { createMemoryHistory, createRouter } from 'vue-router'
import CreateUserComponent from "@/components/create-user.component.vue";
import MainLoginComponent from "@/components/main-login.component.vue";
import ListUserComponent from "@/components/list-user.component.vue";

const routes = [
    { path: '/', component: MainLoginComponent },
    { path: '/users', component: ListUserComponent },
    { path: '/create-user', component: CreateUserComponent },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default  router;