import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false
Vue.filter("Ucase",function(val)
{
  return val.toUpperCase();
})
Vue.filter("currencyConverter",function(val)
{
  return val*85
})
new Vue({
  render: h => h(App),
}).$mount('#app')