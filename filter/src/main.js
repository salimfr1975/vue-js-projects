import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import about from './components/about.vue'
import home from './components/home.vue'
Vue.use(VueRouter);
Vue.config.productionTip=false
const routes=[
    {path:'/',components:home},
    {path:'/about',components:about},
]
const router=new VueRouter({routes})

new Vue({
    router:router,
    render: h => h(App)
}).$mount("#app")