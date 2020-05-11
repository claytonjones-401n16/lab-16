'use strict';

const net = require('net');
const socket = net.Socket();
const faker = require('faker');

socket.connect({port: 3000, host: 'localhost'}, () => {
  console.log('Connected to TCP server!');
});

socket.on('data', (payload) => {
  // console.log('received:', JSON.parse(Buffer.from(payload).toString()));
  payload = JSON.parse(Buffer.from(payload).toString());
  let event = payload.event;
  let order = payload.order;

  // let {event, order} = payload;

  if (event === 'delivered') {
    console.log(`Thanks for delivering order # ${order.id}`);
  }
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
  socket.write(JSON.stringify({event: 'pickup', order: payload}));
}, 5000);
