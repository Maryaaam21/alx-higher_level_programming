#!/usr/bin/node

const args = process.argv.slice(2);

// we will use destructuring to get the first arg
const [firstArg] = args;

// now, we have to check if firstArg is a number
const num = parseInt(firstArg, 10);

if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log('Not a number');
}
