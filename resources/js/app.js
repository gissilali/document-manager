require('./bootstrap');

import { InertiaApp } from '@inertiajs/inertia-vue';
import Vue from 'vue';


Vue.mixin({
    methods: {
        route: window.route,
    },
    computed: {
        isAdmin() {
            if (this.$page.user == null) {
                return false;
            }

            return this.$page.user.type === this.$page.config.user_types.admin;
        }
    }
});

Vue.use(InertiaApp);

const app = document.getElementById('app');

new Vue({
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
            },
        }),
}).$mount(app);
