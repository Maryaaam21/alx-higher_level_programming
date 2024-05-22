#!/usr/bin/node
const args = process.argv.slice(2);

const [firstArg, secondArg] = args;

if (firstArg === undefined || secondArg === undefined) {
    console.log("Two arguments are required");
} else {
    console.log(`${firstArg} is ${secondArg}`);
}
