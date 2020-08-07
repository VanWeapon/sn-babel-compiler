const babel = require('@babel/core');
const process = require('process');

const code = process.argv[2];

function compile(code) {
const compiled = babel.transformSync(code, {
    presets: ["@babel/preset-env"]
});


return compiled.code || "An error occurred";

}
// console.log("Before: " + code + "\nCompiled:");

console.log(compile(code))