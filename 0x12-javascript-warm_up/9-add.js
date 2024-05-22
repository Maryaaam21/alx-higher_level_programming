#!/usr/bin/node

function add(a, b) {
return a + b;
}

const args = process.argv.slice(2);
const int1 = parseInt(args[0], 10);
const int2 = parseInt(args[1], 10);

console.log(add(int1, int2));
