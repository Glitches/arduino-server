'use strict';
require('dotenv');
import * as express from 'express';
import * as cors from 'cors';
import * as server from 'http';
import * as io from 'socket.io';
import Router from './router';
const app = express();
const Server = server.createServer(app);
const Port = process.env.PORT || 5000;

const Io = io(Server);

Io.on('connection', socket => {
  socket.on('message', () => {});
  socket.on('disconnect', () => {});
});

app
  .use(cors())
  .use(Router)
  .listen(Port, () =>
    // eslint-disable-next-line no-console
    console.log(`==============================\n
Server running on port: ${Port} \n
==============================\n`)
  );
