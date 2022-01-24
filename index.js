const path = require('path');
const express = require('express');
const app = express();
const Server = require('node-git-server');

const repos = new Server(path.resolve(__dirname, 'tmp'), {
    autoCreate: true
});

const port = process.env.PORT || 7005;

app.use('/console', express.static(__dirname + '/console'));

app.use('/git', function(req, res) {
  repos.handle(req, res)
});

app.listen(7005, () => {
  console.log(`Express http server listening`);
});