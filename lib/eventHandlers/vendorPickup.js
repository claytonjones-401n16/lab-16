'use strict';


/**
 * This function handles the pickup event from the vendor by logging a message to the console with order information.
 *
 * @param {object} payload - An object containing order information
 *
 * @example
 *
 *     vendorPickup(payload)
 */
function vendorPickup(payload) {
  console.log('EVENT pickup');
  console.log(`- Time: ${payload.time}`);
  console.log(`- Store: ${payload.store}`);
  console.log(`- OrderID: ${payload.orderID}`);
  console.log(`- Customer: ${payload.customer}`);
  console.log(`- Address: ${payload.address}`);
  console.log();
}

module.exports = vendorPickup;
