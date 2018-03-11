'use strict';
require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app);
const router = require('./router');
const Port = process.env.PORT || 5000;
const io = require('socket.io')(server);

io.on('connection', socket => {
  socket.on('message', () => {});
  socket.on('disconnect', () => {});
});

app
  .use(cors())
  .use(router)
  .listen(Port, () =>
    // eslint-disable-next-line no-console
    console.log(`==============================\n
Server running on port: ${Port} \n
==============================\n`)
  );
