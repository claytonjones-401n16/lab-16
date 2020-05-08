'use strict';

const emitter = require('../events.js');

function driverPickup(payload) {
  setTimeout(() => {
    console.log(`DRIVER Picked up Order #${payload.orderID}`);
    console.log();
    emitter.emit('in-transit', payload);
  }, 800);
}

module.exports = driverPickup;