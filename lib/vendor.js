'use strict';

const faker = require('faker');
const emitter = require('./events.js');

const vendorPickup = require('./eventHandlers/vendorPickup.js');

const vendorThanks = require('./eventHandlers/vendorThanks.js');

emitter.on('pickup', vendorPickup);

setInterval(() => {

    let date = new Date().toString().slice(0, 24);
  
    let newOrder = {
      time: date,
      store: faker.company.companyName(),
      orderID: faker.random.number(), 
      customer: faker.name.findName(),
      address: `${faker.address.streetAddress()}, ${faker.address.country()}`
    }

    emitter.emit('pickup', newOrder);
}, 5000);

emitter.on('delivered', vendorThanks);