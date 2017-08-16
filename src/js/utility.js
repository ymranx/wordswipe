export default {
    Math: {
        distance2D(x1, y1, x2, y2) {
            let x = x1 - x2;
            let y = y1 - y2;
            return Math.sqrt(x * x + y * y);
        },
        getAngle(x1, y1, x2, y2) {
            return (Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI);
        },
        pointsBetween(x1, y1, x2, y2) {

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
    }
}