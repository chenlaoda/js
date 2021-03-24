import vue from 'vue';
import Router from 'vue-router'

vue.use(Router);


export default new Router({
    router: [
        {
            path: '/',
            name: "home",
            compoent: home
        },
        {
            path: '/',
            name: "list",
            compoent: list
        },
    ]
})