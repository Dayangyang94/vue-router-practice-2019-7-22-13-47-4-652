import Router from 'vue-router';
import Vue from 'vue';
import MutiTodo from '../components/MutiTodo';
import Home from '../components/Home.vue'
import Main from '../components/Main.vue';
import Mine from "../components/Mine";


Vue.use(Router)

export default new Router({
    routes: [
        {path: "/",component: Main},
        {
            path: "/Home/:username",
            component: Home,
            props :true,
         children: [
            {
              path: 'MutiTodo',
              name:"MutiTodo",
              component:MutiTodo
            },
            {
              path: 'Mine',
              name:"Mine",
              component: Mine
            },
            {
                path:"/",
                redirect:'MutiTodo'
            }
          ]
    },
    ]
})