import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../page/home/Home.vue';
import Contact from '../page/contact/Contact.vue';
import Portfolio from '../page/portfolio/Portfolio.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/contact', component: Contact},
        {path: '/portfolio', component: Portfolio}
    ]
})