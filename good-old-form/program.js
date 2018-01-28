/* GOOD OLD FORM ============= */

const express = require('express');
const bodyparser = require('body-parser');



const app = express();
app.use(bodyparser.urlencoded({ extended: false }))
.post('/form', (req, res) => {
    res.send(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);