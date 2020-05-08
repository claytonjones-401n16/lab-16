'use strict';

const emitter = require('../events.js');

function driverInTransit(payload) {
  console.log(`EVENT in-transit Order #${payload.orderID}`);
  console.log();

  setTimeout(() => {
    console.log(`Delivered Order #${payload.orderID}`);
    emitter.emit('delivered', payload);
    console.log();
  }, 3000);
}

module.exports = driverInTransit;