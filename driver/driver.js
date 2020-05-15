'use strict';

const socket = require('socket.io-client').connect('http://localhost:3000/csps');


socket.on('pickup', (payload) => {
  setTimeout(() => {
    console.log(`picked up order ${payload.id}`);
    socket.emit('in-transit', payload);
  }, 1000);
});

socket.on('in-transit', (payload) => {
  setTimeout(() => {
    console.log(`delivered order ${payload.id}`);
    socket.emit('delivered', payload);
  }, 3000);
});
