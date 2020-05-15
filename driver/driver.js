'use strict';

const socket = require('socket.io-client').connect('http://localhost:3000/csps');

/**
 * pickupHandler - handles 'pickup' event. Logs message to the console and emits 'in-transit' event to the server after 1 second delay.
 *
 * @param {object} payload - An object containing order information
 *
 * @example
 *
 *     pickupHandler({time: time, store: store})
 */

function pickupHandler(payload) {
  setTimeout(() => {
    console.log(`picked up order ${payload.id}`);
    socket.emit('in-transit', payload);
  }, 1000);
}

/**
 * inTransitHandler - handles 'in-transit' event. Logs message to the console and emits 'delivered' event to the server after 3 second delay.
 *
 * @param {object} payload - An object containing order information
 *
 * @example
 *
 *     inTransitHandler({time: time, store: store})
 */

function inTransitHandler(payload) {
  setTimeout(() => {
    console.log(`delivered order ${payload.id}`);
    socket.emit('delivered', payload);
  }, 3000);
}

socket.on('pickup', pickupHandler);

socket.on('in-transit', inTransitHandler);
