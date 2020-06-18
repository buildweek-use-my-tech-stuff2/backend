const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//
const authenticate = require('../auth/authenticate-middleware.js');

const authRouter = require('../auth/auth-router.js');
const itemRouter = require('../items/item-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//
server.use('/api/auth', authRouter);
server.use('/api/items', authenticate,  itemRouter);

module.exports = server;
