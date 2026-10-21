function countBy(x, n) {
    const multiples = [];

   for (let i = 1; i <= n; i++) {
    multiples[i - 1] = x * i;
}

    return multiples;
}