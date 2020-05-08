'use strict';

const emitter = require('../events.js');

/**
 * This function handles the driver pickup event by logging a message to the console, and then emitting an in-transit event after a timeout.
 *
 * @param {object} payload - An object containing order information
 *
 * @example
 *
 *     driverPickup(payload)
 */

function driverPickup(payload) {
  setTimeout(() => {
    console.log(`DRIVER Picked up Order #${payload.orderID}`);
    console.log();
    emitter.emit('in-transit', payload);
  }, 800);
}

module.exports = driverPickup;