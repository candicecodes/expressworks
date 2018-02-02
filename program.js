const express = require('express');
const fs = require('fs');

const app = express();
app.get('/books', (req, res) => {
    const file = process.argv[3];
    //wrong
});