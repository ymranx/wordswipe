export default {
    Math: {
        distance2D(x1, y1, x2, y2) {
            let x = x1 - x2;
            let y = y1 - y2;
            return Math.sqrt(x * x + y * y);
        },
        getAngle(x1, y1, x2, y2) {
            return (Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI);
        }
    },

    isValidMove(angle) {
        let flag = false;
        let validAngles = {
            "45": 1,
            "90": 1,
            "135": 1,
            "180": 1,
            "0": 1
        };
        if (Math.abs(angle) in validAngles) {
            flag = true;
        }
        return flag;
    },
    lettersBetween(x1, y1, x2, y2) {
        let dx, dy, x, y, tmp, rev = false;
        let indices = [];
        if (x1 > x2) {
            tmp = x1;
            x1 = x2;
            x2 = tmp;
            rev = true;
        }
        if (y1 > y2) {
            tmp = y1;
            y1 = y2;
            y2 = tmp;
            rev = true;
        }
        dx = x2 - x1;
        dy = y2 - y1;

        if (x1 != x2) {
            for (x = x1; x <= x2; x++) {
                y = y1 + dy * (x - x1) / dx;
                indices.push(y * 15 + x);
            }
        } else {
            for (y = y1; y <= y2; y++) {
                x = x1 + dx * (y - y1) / dy;
                indices.push(y * 15 + x);
            }
        }
        return { indices: indices, reverse: rev };

    }
}