"use strict";
// function fic(n: number): void {
//     let n1: number = 0;
//     let n2: number = 1;
//     let item: number;
//     let text: string = "";
//     let tong: number = 0;
//     for (let i = 1; i <= n; i++) {
//         item = n1 + n2;
//         n1 = n2;
//         n2 = item;
//         // text += n1 + "\n";// in ra dãy fibonacci
//         tong += n1;
//     }
//     // console.log("dãy số  :" + text);
//     console.log("Tổng  :" + tong);
//
// }
//
// fic(2);
exports.__esModule = true;
// @ts-ignore
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ficdq(n) {
    var cache = {};
    if (n <= 1) {
        console.log(n);
        return n;
    }
    // if (cache[n]) {
    //     return cache[n];
    // }
    var result = ficdq(n - 1) + ficdq(n - 2);
    cache[n] = result;
    console.log(result);
    return result;
}
rl.question("What is your name? ", function (n) {
    console.log("Oh, so your name is ".concat(n));
    console.log("Closing the interface");
    rl.close();
});
