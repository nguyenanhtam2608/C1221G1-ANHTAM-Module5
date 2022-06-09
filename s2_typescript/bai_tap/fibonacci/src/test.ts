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

// fic(6);

// dùng đệ quy
function fibonacci (number: number) : number {
    if (number <= 1) {
        return 1;
    } else {
        return fibonacci(number - 1 ) + fibonacci(number - 2);
    }
}
// hàm in ra dãy số
console.log("5 số đầu tiên trong dãy fibonacci:" )
for (let i = 0; i < 5; i++) {
    console.log(fibonacci(i));
}

// hàm tính tông dãy
let sum = 0;
console.log("Tổng 5 số đầu tiên trong dãy fibonacci: ")
for (let i = 0; i < 5; i++) {
    sum += fibonacci(i)
}
console.log(sum)



