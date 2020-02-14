import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/components/system/PageNotFound.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            name: '404',
            component: PageNotFound,
        },
    ],
});
