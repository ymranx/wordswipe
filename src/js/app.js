import Config from '../../config/config'
let gridController = null;
let playerController = null;
let scoreController = null;

let wordBase = [];
let wordsFound = 0;
let totalWords = 10;

export default {
    data: function () {
        return {
            selword: '',
            words: []
        }
    },
    mounted: function () {
        gridController = this.$refs.appGrid;
        playerController = this.$refs.appPlayers;
        scoreController = this.$refs.appScore;

        $.get(Config.Services.wordlist).then((res) => {
            wordBase = res;
            this.initGame();
        })
    },
    methods: {
        initGame: function () {
            this.prepareWords();
            playerController.setPlayers(5);
            gridController.initPuzzle(this.words);
        },
        
        resetGame: function() {

        },
        // Suffle the words from dictionary
        prepareWords: function () {
            this.words = [];
            for (let i = 0; i < 10; i++) {
                this.words.push({
                    word: wordBase[parseInt(Math.random() * wordBase.length)],
                    done: false
                })
            }
        },

        //Event handlers
        onWordMatch: function (idx) {
            this.words[idx].done = true;
        },

        onPassClick: function() {
            console.log(playerController.nextPlayer());
        }
    }
}