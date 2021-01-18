#!/usr/bin/env node
const words = [
    "loves",
    "weds",
    "hugs",
    "sees",
    "looks for",
    "cares",
    "kills",
    "likes"
]

const names = process.argv.slice(2);
const word = words[Math.floor(Math.random() * words.length)]
console.log(`${names[0]} ${word} ${names[1]}`);