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

        nextPlayer: function () {
            return(this.current = (this.current + 1) % this.players.length);
        }
        //Event handlers
    }
}