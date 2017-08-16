
let gridController = null;

export default {
    data: function () {
        return {
            words: ['Aardvark', 'Antelope', 'Donkey', 'Bear', 'Capybara',
                    'Bison', 'Crow', 'Falcon', 'Elephant', 'Goose'],
            selword: ''
        }
    },
    mounted: function () {
        gridController = this.$refs.appGrid;
        gridController.initPuzzle(this.words);
    },
    methods: {

    }
}