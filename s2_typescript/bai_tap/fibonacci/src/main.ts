let n1 = 0;
let n2 = 1;
let itemn;
let text = "";
let tong = 0;
for (let i = 1; i <= 20; i++) {
    itemn = n1 + n2;
    n1 = n2;
    n2 = itemn;
    text += n1 + "\n";// in ra dãy fibonacci
    tong += n1;
}
console.log("dãy số  :" + text);
console.log("Tổng  :" + tong);
