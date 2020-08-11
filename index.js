const babel = require('@babel/core');
const process = require('process');
const express = require('express');
const app = express();

app.use(express.json());


app.post('/compile', async (req, res, next) => {
    var code = req.body.code;
    const compiledCode = compile(code);
    res.write(compiledCode);
    res.end();
    next();
});

function compile(code) {
    const compiled = babel.transformSync(code, {
        presets: ["@babel/preset-env"]
    });
    return compiled.code || "An error occurred";
}


app.listen(3000);
