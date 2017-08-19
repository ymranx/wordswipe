import Config from '../../config/config'
let gridController = null;
let playerController = null;
let scoreController = null;

let wordBase = [];
let wordsFound = 0;
let userGaveup = 0;
let totalWords = 10;

export default {
    data: function () {
        return {
            selword: '',
            selPlayer: 2,
            gameOn: false,
            gameMsg: '',
            words: []
        }
    },
    mounted: function () {
        gridController = this.$refs.appGrid;
        playerController = this.$refs.appPlayers;
        scoreController = this.$refs.appScore;

        $.get(Config.Services.wordlist).then((res) => {
            wordBase = res;
        })
    },
    methods: {
        initGame: function () {
            this.gameOn = true;
            this.prepareWords();
            playerController.setPlayers(this.selPlayer);
            gridController.initPuzzle(this.words);
            scoreController.startTimer();
        },

        resetGame: function () {
            this.gameOn = false;
           // this.gameMsg = "";
            userGaveup = 0;
            wordsFound = 0;
            gridController.reset();
            playerController.reset();
            scoreController.reset();
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
            if(userGaveup >= this.selPlayer) {
                this.gameMsg = "Game Over";
                this.resetGame();
                return;
            }
            if(wordsFound >= totalWords) {
                let winner = playerController.getWinner();
                this.gameMsg = winner.name + " won";
                this.resetGame();
                return;
            }
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
            userGaveup = 0;
            wordsFound++;

            setTimeout(() => {
                this.passNextPlayer();
            }, 1000);
        },

        onNewGame: function() {
            this.resetGame();
        },
        
        onPassClick: function () {
            userGaveup++;
            this.passNextPlayer();
        },

        onPlayerSelect: function(pcount, ev) {
            this.selPlayer = pcount;
        },

        onGameStart: function() {
            this.initGame();
        }
    }
}