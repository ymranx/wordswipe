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
        this.startTimer();
        setTimeout(() => {
            this.stopTimer();
        }, 2000);
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

        getTimer: function () {
            return ({ mm: mm, ss: ss });
        },

        setScore: function(llen) {
            this.score = llen;
        }
        //Event handlers
    }
}