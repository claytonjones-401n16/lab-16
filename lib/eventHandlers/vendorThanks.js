'use strict';

function vendorThanks(payload) {
  setTimeout(() => {
    console.log(`VENDOR: Thanks for delivering Order #${payload.orderID}`);
    console.log();
  }, 200);
}

module.exports = vendorThanks;
