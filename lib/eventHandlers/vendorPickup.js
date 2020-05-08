'use strict';

function pickupHandler(payload) {
  console.log('EVENT pickup');
  console.log(`- Time: ${payload.time}`);
  console.log(`- Store: ${payload.store}`);
  console.log(`- OrderID: ${payload.orderID}`);
  console.log(`- Customer: ${payload.customer}`);
  console.log(`- Address: ${payload.address}`);
  console.log();
}

module.exports = pickupHandler;
