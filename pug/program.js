/* PUG ===================== */

const express = require('express');
const port = process.argv[2];
const filePath = process.argv[3];

const app = express();

app.set('views', filePath);
app.set('view engine', 'pug');
app.get('/home', (req, res) => {
    res.render('index', {date: new Date().toDateString()});
});
app.listen(port);
