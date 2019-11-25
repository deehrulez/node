const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Digital Print")
}); 

app.listen(3001);
