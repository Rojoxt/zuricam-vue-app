import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "../components/HelloWorld.vue";


const router = createRouter({
    history: createWebHistory(/*import.meta.env.BASE_URL*/),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld,
            children:[
                {
                    path: "/cameras-management",
                    name: "cameras-management",
                    component: ()=>import('../unit-management/views/CameraManagementView.vue'),
                },
            ]
        },


    ]
})

export default router
