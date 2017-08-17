import Vue from 'vue'
import App from '../templates/app.vue'
import Grid from '../templates/grid.vue'
import Score from '../templates/score.vue'
import Players from '../templates/players.vue'

Vue.component('app', App);
Vue.component('grid', Grid);
Vue.component('score', Score);
Vue.component('players', Players);

new Vue({
    el: '#main'
})

