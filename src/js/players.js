import Config from '../../config/config'

export default {
    data: function () {
        return {
            players: [],
            current: 0
        }
    },
    mounted: function () {

    },
    methods: {
        setPlayers: function (pcount) {
            for (let i = 0; i < pcount; i++) {
                this.players.push({ name: 'player-' + (i + 1), score: 0 });
            }
        },

        getCurrentPlayer: function() {
            return (this.players[this.current]);
        },

        getWinner: function() {
            let idx = 0, scr = this.players[idx].score;
            this.players.forEach((pla, cidx) => {
                if(pla.score > scr) {
                    idx = cidx;
                    scr = pla.score;
                }
            });
            return this.players[idx];
        },

        nextPlayer: function () {
            return(this.current = (this.current + 1) % this.players.length);
        },

        reset: function() {
            this.players = [];
            this.current = 0;
        }
        //Event handlers
    }
}