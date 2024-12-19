const fs = require('fs');
const path = require('path');

const readJSON = (file) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, `../data/${file}.json`), 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
};

const writeJSON = (file, data) => {
    fs.writeFileSync(
        path.join(__dirname, `../data/${file}.json`),
        JSON.stringify(data, null, 2),
        'utf-8'
    );
};

module.exports = { readJSON, writeJSON };
