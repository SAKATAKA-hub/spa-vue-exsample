import VueRouter from 'vue-router';
import HeaderComponent from "./components/HeaderComponent";
import TaskListComponent from "./components/TaskListComponent";

import TasksComponent from "./pages/tasks";
import HelpComponent from "./pages/help";
import LoginComponent from "./pages/login";


require('./bootstrap');
window.Vue = require('vue').default;


/*
---------------------------
 Router
---------------------------
*/

    Vue.use(VueRouter);

    const router = new VueRouter({
        mode: 'history',
        routes: [
            { path: '/',      name: 'tasks', component: TasksComponent },
            { path: '/help',  name: 'help',  component: HelpComponent },
            { path: '/login', name: 'login',  component: LoginComponent },

            // {
            //     path: '/tasks', name: 'task.list',
            //     component: TaskListComponent
            // },
        ]
    });


/*
---------------------------
 Component
---------------------------
*/
    Vue.component('index-component',  require('./index').default);



    // Vue.component('example-component', require('./components/ExampleComponent.vue').default);

    Vue.component('header-component', HeaderComponent);

    Vue.component('task-list-component', TaskListComponent);


const app = new Vue({
    el: '#app',
    router,
});
