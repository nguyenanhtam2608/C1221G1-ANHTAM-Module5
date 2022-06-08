function fic(n: number): void {
    let n1: number = 0;
    let n2: number = 1;
    let item: number;
    let text: string = "";
    let tong: number = 0;
    for (let i = 1; i <= n; i++) {
        item = n1 + n2;
        n1 = n2;
        n2 = item;
        // text += n1 + "\n";// in ra dãy fibonacci
        tong += n1;
    }
    // console.log("dãy số  :" + text);
    console.log("Tổng  :" + tong);

}

fic(6);

// // @ts-ignore
// import * as readline from 'readline';
//
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// function ficdq(n: number): number {
//     let cache = {};
//     if (n <= 1) {
//         console.log(n);
//         return n;
//     }
//     // if (cache[n]) {
//     //     return cache[n];
//     // }
//     const result = ficdq(n - 1) + ficdq(n - 2);
//     cache[n] = result;
//     console.log(result);
//     return result;
//
// }
// rl.question("Enter? ", function (n: string) {
//     console.log(`Oh, so your name is ${n}`);
//     console.log("Closing the interface");
//     rl.close();
// });




