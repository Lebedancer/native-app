'use strict';

export default class Converter {
    static stringToDate(val) {
        if (!val) {
            return;
        }
        var dateArr = val.split('.');
        return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
    }

    static dateToString(temp) {
        const year = padStr(temp.getFullYear());
        const month = padStr(1 + temp.getMonth());
        const day = padStr(temp.getDate());

        return `${day}.${month}.${year}`;
    }

}

function padStr(i) {
    return (i < 10) ? "0" + i : "" + i;
}