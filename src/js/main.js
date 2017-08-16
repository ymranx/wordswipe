import Vue from 'vue'
import App from '../templates/app.vue'
import Grid from '../templates/grid.vue'

Vue.component('app', App);
Vue.component('grid', Grid);

new Vue({
    el: '#main'
})

