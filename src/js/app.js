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
            playerController.setPlayers(3);
            gridController.initPuzzle(this.words);
            scoreController.startTimer();
        },

        resetGame: function () {

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
        passNextPlayer: function () {
            let curPlayer;
            playerController.nextPlayer();
            curPlayer = playerController.getCurrentPlayer();
            scoreController.resetTimer();
            scoreController.setScore(curPlayer.score);
        },

        //Event handlers
        onWordMatch: function (idx) {
            let mword = this.words[idx];
            let curPlayer = playerController.getCurrentPlayer();
            mword.done = true;
            scoreController.setScore(curPlayer.score + mword.word.length * 10);
            curPlayer.score += mword.word.length * 10;
            setTimeout(() => {
                this.passNextPlayer();
            }, 1000);
        },

        onPassClick: function () {
            this.passNextPlayer();
        }
    }
}