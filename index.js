const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
let dotenv  = require('dotenv');

app.get('/check-health', (req, res) => {
    res.json({ status: 'active', message: 'healthy_with_DE_MINH' });
});

app.get('/add/:numA/:numB', (req, res) => {
    let { numA, numB } = req.params;
    let resultAdd = +numA + +numB;

    return res.json({ result: resultAdd });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = app;