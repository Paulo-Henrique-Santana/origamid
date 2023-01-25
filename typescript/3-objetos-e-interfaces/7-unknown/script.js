"use strict";
function typeGuard(value) {
    if (typeof value === "string")
        return value.toUpperCase();
    if (typeof value === "number")
        return value.toFixed();
    if (value instanceof HTMLElement)
        return value.innerText;
}
console.log(typeGuard("Origamid"));
console.log(typeGuard(200));
console.log(typeGuard(document.body));
