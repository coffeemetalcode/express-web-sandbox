const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET']
}));

const dataPath = path.join(__dirname, './mock');

function getMockData(basePath, filename) {
    let file = path.join(basePath, filename);

    return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

const PORT = 3000;

app.get("/", (req, res, next) => {
    res.send("Hi there");
});

app.get("/api/products", (req, res, next) => {
    let data = getMockData(dataPath, 'products.json');

    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Service is now open on port ${PORT}!`);
});