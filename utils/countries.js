
const fs   = require('fs');
const path = require('path');

const csvRaw = fs.readFileSync(
  path.join(__dirname, '..', 'public', 'countries.csv'),
  'utf8'
);


const countries = csvRaw
  .trim()
  .split(/\r?\n/)                      
  .map(line => line.replace(/"/g, ''))  
  .map(line => {
    const [code, name] = line.split('|');
    return { code, name };
  })
  .sort((a, b) => a.name.localeCompare(b.name)); 

module.exports = countries;             