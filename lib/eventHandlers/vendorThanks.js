'use strict';

/**
 * This function handles the delivered event by logging a message to the console after a timeout.
 *
 * @param {object} payload - An object containing order information
 *
 * @example
 *
 *     vendorThanks(payload)
 */

function vendorThanks(payload) {
  setTimeout(() => {
    console.log(`VENDOR: Thanks for delivering Order #${payload.orderID}`);
    console.log();
  }, 200);
}

module.exports = vendorThanks;
