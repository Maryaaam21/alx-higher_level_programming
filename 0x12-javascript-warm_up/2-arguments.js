#!/usr/bin/node
const numOfArgs = process.argv.slice(2);

if (numOfArgs.length === 0) {
    console.log('No argument');
}
else if (numOfArgs.length === 1 ) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}
