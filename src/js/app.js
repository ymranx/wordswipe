
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
            console.log();
        });
        $(".app-grid").on("mouseup", ".grid-letter", function (ev) {
            mouseDown = false;
            p2 = $(this).position();
            line = paper.line(p1.left + 7, p1.top + 7, p2.left + 7, p2.top + 7);
            line.attr({
                class: "line-1"
            });
            console.log($(this).index(".grid-letter"));
        })
    },
    methods: {

    }
}