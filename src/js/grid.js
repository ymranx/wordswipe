import Utility from './utility'

let mouseDown = false;
let puzzle;

export default {

    data: function () {
        return {
            letters: ``,
            words: [],
            selword: ''
        }
    },
    mounted: function () {
        //
        let _this = this;
        var paper = Snap('#appIllustrations');
        let p1, p2, lp1, lp2, cp2, line;

        $(".app-grid").on("mousedown", ".grid-letter", function (ev) {
            mouseDown = true;
            let idx = $(this).index(".grid-letter")
            p1 = $(this).position();
            lp1 = {
                y: Math.floor(idx / 15),
                x: ((idx % 15))
            }
            line = paper.line(p1.left + 12, p1.top + 12, p1.left + 12, p1.top + 12);
            line.attr({
                class: "line-1"
            });
        });
        $(".app-grid").on("mouseenter", ".grid-letter", function (ev) {
            if (mouseDown) {
                p2 = $(this).position();
                let idx = $(this).index(".grid-letter")
                cp2 = {
                    y: Math.floor(idx / 15),
                    x: ((idx % 15))
                }
                if (Utility.isValidMove(Utility.Math.getAngle(lp1.x, lp1.y, cp2.x, cp2.y))) {
                    line.attr({
                        x2: p2.left + 12,
                        y2: p2.top + 12
                    });
                    _this.getSelectedWord(Utility.lettersBetween(lp1.x, lp1.y, cp2.x, cp2.y));
                }

            }
        })
        $(".app-grid").on("mouseup", ".grid-letter", function (ev) {
            mouseDown = false;
            let idx = $(this).index(".grid-letter");
            lp2 = {
                y: Math.floor(idx / 15),
                x: ((idx % 15))
            }
            let selWord = _this.getSelectedWord(Utility.lettersBetween(lp1.x, lp1.y, lp2.x, lp2.y));
            let matchedIndex = _this.words.findIndex((word) => { return word.word == selWord });
            
            if (matchedIndex == -1) {
                $(line.node).fadeOut("slow", function () {
                    $(this).remove();
                });
            } else {
                _this.$emit("word-match", matchedIndex);
            }
        })
    },
    methods: {
        initPuzzle(words) {
            this.words = words;

            puzzle = wordfind.newPuzzle(this.words.map((word) => { return word.word }), {
                height: 15,
                width: 15,
                orientations: ['horizontal', 'vertical', 'diagonal'],
                fillBlanks: true,
                preferOverlap: false
            });
            var lttrs = "";
            puzzle.forEach((row) => {
                lttrs += row.join("");
            });
            this.letters = lttrs;
        },
        getSelectedWord(data) {
            let word = "";
            data.indices.forEach((idx) => {
                word += this.letters[idx]
            })
            return word;
        },

        reset() {
            $('#appIllustrations line').remove();
        }
    }
}