'use strict';
const server = require('socket.io')(3000);
const csps = server.of('/csps');

/**
 * pickupHandler - handles the 'pickup' event
 * logs payload details to the console
 * emits a pickup event to connected sockets
 *
 * @param {object} payload - An object containing order information
 *
 * @example
 *
 *     pickupHandler({time: time, store: store})
 */

function pickupHandler(payload) {
  console.log('pickup');
  console.log(`Time - ${payload.time}`);
  console.log(`Store - ${payload.store}`);
  console.log(`OrderID - ${payload.id}`);
  console.log(`Customer - ${payload.customer}`);
  console.log(`Address - ${payload.address}`);

  csps.emit('pickup', payload);
}

/**
 * inTransitHandler - handles 'in-transit' event. Logs message to the console. Emits 'in-transit' event to connected sockets
 *
 * @param {object} payload - An object containing order information
 *
 * @example
 *
 *     inTransitHandler({time: time, store: store})
 */


function inTransitHandler(payload) {
  console.log(`in-transit order ${payload.id}`);
  csps.emit('in-transit', payload);
}

/**
 * deliveredHandler - handles 'delivered' event. Logs message to the console. Emits 'delivered' event to connected sockets
 *
 * @param {object} payload - An object containing order information
 *
 * @example
 *
 *     deliveredHandler({time: time, store: store})
 */


function deliveredHandler(payload) {
  console.log(`delivered order ${payload.id}`);
  csps
    .to(`${payload.store}`)
    .emit('delivered', payload);
}

csps.on('connection', (socket) => {
  console.log('connected to socket:', socket.id);

  socket.on('join', (payload) => {
    socket.join(`${payload}`);
    console.log(`socket ${socket.id} joined room '${payload}'`);
  });

  socket.on('pickup', pickupHandler);

  socket.on('in-transit', inTransitHandler);

  socket.on('delivered', deliveredHandler);
});
