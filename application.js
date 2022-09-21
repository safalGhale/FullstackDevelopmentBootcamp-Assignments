const express = require('express');

const server = express();

const data = [{
    "name ": "Ram"
},
{
    "name ": "Hari"
}];

server.get('/', (req, res) => {
    console.log('home page');
    res.header('Content-Type', 'application/json');
    res.send(data);
});

server.listen(5002, () => {
    console.log('Server is running on port 5002');
});