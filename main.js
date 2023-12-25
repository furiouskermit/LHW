import Vue from 'vue'; 
import Route from './router/Route.vue';
import router from './router/routes.js'

new Vue({
    router,
    render: h => h(Route),
}).$mount('#root');