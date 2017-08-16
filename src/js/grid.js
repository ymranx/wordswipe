import Utility from './utility'

let mouseDown = false;

export default {
    props: ['words'],

    data: function () {
        return {
            letters: `ABCDEFGHIJKLMNOPQRSTUVWXYZABCDABCDEFGHIJKLMNOPQRSTUVWXYZEFGHIFGHIJKLMNOPQRSTUVWXYZNOABCDEFGHIJKLMNOPABCDEFGHIJKLMNOPQRSTUVWXYZQRSTUVWXYZPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTABCDEFGHIJKLMNOPQRSTUVWXYZUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ`,
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
            console.log(lp1, lp2);
        })
    },
    methods: {
        getSelectedWord(data) {
            let word = "";
            data.indices.forEach((idx) => {
                word += this.letters[idx]
            })
            return word;
        }
    }
}