/*
    server for posts
*/

// import dependencies
const express = require('express');

// create server 
const server = express();

// create blog post for using post request
server.post((req, res) => {
    const { title, content } = req.body;
    
});

// get blog post using get request
server.get((req, res) => {

});


server.listen(4000, () => {
    console.log(`server listen port 4000`);
});