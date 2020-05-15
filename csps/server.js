'use strict';
const server = require('socket.io')(3000);
const csps = server.of('/csps');

csps.on('connection', (socket) => {
  console.log('connected to socket:', socket.id);

  socket.on('join', (payload) => {
    socket.join(`${payload}`);
    console.log(`socket ${socket.id} joined room '${payload}'`);
  });

  socket.on('pickup', (payload) => {
    console.log('pickup');
    console.log(`Time - ${payload.time}`);
    console.log(`Store - ${payload.store}`);
    console.log(`OrderID - ${payload.id}`);
    console.log(`Customer - ${payload.customer}`);
    console.log(`Address - ${payload.address}`);

    csps.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    console.log(`in-transit order ${payload.id}`);
    csps.emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    console.log(`delivered order ${payload.id}`);
    csps
      .to(`${payload.store}`)
      .emit('delivered', payload);
  });
});
