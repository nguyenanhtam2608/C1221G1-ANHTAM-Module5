function ficdq(n) {
    let cache = {};
    if (n <= 1) {
        return n;
    }
    if (cache[n]) {
        return cache[n];
    }
    const result = ficdq(n - 1) + ficdq(n - 2);
    cache[n] = result;
    console.log(result);
    return result;
}
ficdq(5);
//# sourceMappingURL=test.js.map