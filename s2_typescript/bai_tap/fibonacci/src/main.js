var n1 = 0;
var n2 = 1;
var total;
var text = "";
var tong = 0;
for (var i = 1; i <= 20; i++) {
    total = n1 + n2;
    n1 = n2;
    n2 = total;
    text += n1;
    tong += n1;
}
console.log("dãy số  :" + text + "\n");
console.log("Tổng  :" + tong);
