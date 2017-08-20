let gheight, gwidth;

let wordLayouts = {
    'H': (x, y, offset) => [x + offset, y],
    'V': (x, y, offset) => [x, y + offset],
    'D': (x, y, offset) => [x + offset, y + offset],
}
let isValidPlacement = {
    'H': (x, y, wl) => (x + wl <= gwidth),
    'V': (x, y, wl) => (y + wl <= gheight),
    'D': (x, y, wl) => ((x + wl <= gwidth) && (y + wl <= gheight)),
}
let grid = [];

export default {
    generatePuzzle: function (words, height, width) {
        grid = [];
        gheight = height;
        gwidth = width;
        let flag = true;
        for(let i=0; i<height; i++) {
            grid.push([]);
            for(let j=0; j<width; j++) {
                grid[i].push("");
            }
        }
        words.forEach((word) => {
            let wl = word.length;
            let validCells = this.getValidCells(word);
            let choiceCell = validCells[0];
            if (validCells.length > 0) {
                for (let i = 0; i < word.length; i++) {
                    let curCell = choiceCell.layout(choiceCell.cell[0], choiceCell.cell[1], i);
                    grid[curCell[0], curCell[1]] = word[i];
                }
            } else {
                flag = false;
                return;
            }

        });
        if(flag) {
            return grid;
        }
        return null;
    },
    getValidCells: function (word) {
        let validCells = [];
        let checkLayout;
        let nextCell;
        Object.keys(wordLayouts).forEach((layout) => {
            nextCell = wordLayouts[layout];
            checkLayout = isValidPlacement[layout];
            let x = 0, y = 0;
            while (y < gheight) {
                if (checkLayout(x, y, word.length)) {
                    validCells.push({
                        cell: [x, y],
                        layout: nextCell
                    });

                }
                if (++x >= gwidth) {
                    y++;
                    x = 0;
                }
            }
        });

        return validCells;
    }
}