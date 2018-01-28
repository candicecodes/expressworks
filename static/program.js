/* STATIC ================== */

const express = require('express');
const port = process.argv[2];
const filePath = process.argv[3];

const app = express();
app.use(express.static(filePath) || path.join(index.html, 'public'));
app.listen(port);

