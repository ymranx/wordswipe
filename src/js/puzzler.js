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
let lfills = 'abcdefghijklmnopqrstuvwxyz';

export default {
    generatePuzzle: function (words, height, width) {
        grid = [];
        gheight = height;
        gwidth = width;
        let flag = true;
        for (let i = 0; i < height; i++) {
            grid.push([]);
            for (let j = 0; j < width; j++) {
                grid[i].push("");
            }
        }
        words.forEach((word) => {
            let wl = word.length;
            let validCells = this.getValidCells(word);
            let choiceCell = validCells[Math.floor(Math.random() * validCells.length)];
            if (validCells.length > 0) {
                for (let i = 0; i < word.length; i++) {
                    let curCell = choiceCell.layout(choiceCell.cell[0], choiceCell.cell[1], i);
                    grid[curCell[0]][curCell[1]] = word[i];
                }
            } else {
                flag = false;
                return;
            }

        });
        if (flag) {
            this.polyfillGrid();
            return grid;
        }
        return null;
    },
    // get list of cells where current word can be fit
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
                    if (!this.haveCollision(x, y, word.length, nextCell)) {
                        validCells.push({
                            cell: [x, y],
                            layout: nextCell
                        });
                    }
                }
                if (++x >= gwidth) {
                    y++;
                    x = 0;
                }
            }
        });

        return validCells;
    },
// Detect if current letter is colliding with other letter in cell
    haveCollision: function (x, y, wl, layoutFn) {
        for (let i = 0; i < wl; i++) {
            let curCell = layoutFn(x, y, i);
            if (grid[curCell[0]][curCell[1]] != "") {
                return true;
            }
        }
        return false;
    },
// Fill random letters in empty cells
    polyfillGrid: function () {
        for (let x = 0; x < gwidth; x++) {
            for (let y = 0; y < gheight; y++) {
                if (grid[x][y] == "") {
                    grid[x][y] = lfills[Math.floor(Math.random() * lfills.length)];
                }
            }
        }
    }
}