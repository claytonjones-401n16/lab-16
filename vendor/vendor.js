'use strict';

const socket = require('socket.io-client').connect('http://localhost:3000/csps');

const faker = require('faker');

socket.on('delivered', (payload) => {
  console.log(`Thanks for delivering order ${payload.id}`);
});

setInterval(() => {
  console.log('New order!');
  let payload = { 
    time: new Date().toString().slice(0, 24),
    store: faker.company.companyName(),
    id: faker.random.uuid(), 
    customer: faker.name.findName(),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`
  };

  socket.emit('join', payload.store);
  socket.emit('pickup', payload);
}, 5000);
