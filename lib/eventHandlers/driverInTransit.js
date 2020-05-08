'use strict';

const emitter = require('../events.js');

/**
 * This function handles the in-transit event by logging a message to the console, and then emitting a delivered event after a timeout.
 *
 * @param {object} payload - An object containing order information
 *
 * @example
 *
 *     driverInTransit(payload)
 */
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