
let mouseDown = false;

export default {
    data: function () {
        return {
            data: null,
            letters: `ABCDEFGHIJKLMNOPQRSTUVWXYZABCDABCDEFGHIJKLMNOPQRSTUVWXYZEFGHIFGHIJKLMNOPQRSTUVWXYZNOABCDEFGHIJKLMNOPABCDEFGHIJKLMNOPQRSTUVWXYZQRSTUVWXYZPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTABCDEFGHIJKLMNOPQRSTUVWXYZUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ`,
            words: ['Aardvark', 'Antelope', 'Donkey', 'Bear', 'Capybara',
                'Bison', 'Crow', 'Falcon', 'Elephant', 'Goose']
        }
    },
    mounted: function () {
        //
        var paper = Snap('#appIllustrations');
        let p1, p2, line;

        $(".app-grid").on("mousedown", ".grid-letter", function (ev) {
            mouseDown = true;
            //$(this).index(".grid-letter")
            p1 = $(this).position();
            line = paper.line(p1.left + 12, p1.top + 12, p1.left + 12, p1.top + 12);
            line.attr({
                class: "line-1"
            });
        });
        $(".app-grid").on("mouseenter", ".grid-letter", function (ev) {
            if (mouseDown) {
                p2 = $(this).position();
                line.attr({
                    x2: p2.left + 12,
                    y2: p2.top + 12
                });
            }
        })
        $(".app-grid").on("mouseup", ".grid-letter", function (ev) {
            mouseDown = false;
            let idx = $(this).index(".grid-letter"); 
            console.log(Math.floor(idx / 15) + "," + ((idx % 15) ));
        })
    },
    methods: {

    }
}