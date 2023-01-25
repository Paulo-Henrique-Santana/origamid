"use strict";
function arredondarParaCima(value) {
    if (typeof value === "number")
        return Math.ceil(value);
    else
        return Math.ceil(Number(value)).toString();
}
console.log(arredondarParaCima("8.5"));
console.log(arredondarParaCima(8.5));
