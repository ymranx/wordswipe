import Vue from 'vue'
import App from '../templates/app.vue'
import Grid from '../templates/grid.vue'
import Score from '../templates/score.vue'

Vue.component('app', App);
Vue.component('grid', Grid);
Vue.component('score', Score);

new Vue({
    el: '#main'
})

