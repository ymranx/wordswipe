import Config from '../../config/config'

let timer = null;
let mm = 0, ss = 0;
export default {
    data: function () {
        return {
            time: '00:00',
            score: 0,
            best: 0
        }
    },
    mounted: function () {

    },
    methods: {
        startTimer: function () {
            timer = setInterval(() => {
                ss += 1;
                if (ss > 59) {
                    mm += 1;
                    ss = 0;
                }
                this.time = `${mm}:${ss}`;
            }, 1000)
        },

        stopTimer: function () {
            clearInterval(timer);
        },

        resetTimer: function () {
            ss = mm = 0;
        },

        reset: function() {
            this.time = '00:00';
            this.score = 0;
            this.best = 0;
            this.stopTimer();
            this.resetTimer();
        },

        getTimer: function () {
            return ({ mm: mm, ss: ss });
        },

        getScore: function() {
            return ({score:this.score, best: this.best});
        },

        setScore: function(llen) {
            this.score = llen;
            this.best = Math.max(this.best, llen);
        }
        //Event handlers
    }
}