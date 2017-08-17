import Config from '../../config/config'
let gridController = null;
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
        $.get(Config.Services.wordlist).then((res) => {
            wordBase = res;
            this.initGame();
        })
    },
    methods: {
        initGame: function () {
            this.prepareWords();
            gridController.initPuzzle(this.words);
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
        }
    }
}