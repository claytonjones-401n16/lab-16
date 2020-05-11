'use strict';

const net = require('net');
const server = net.createServer();

let socketPool = [];
let port = 3000;

server.listen(port, () => {
    console.log('Server is up and running on port', port);
});

server.on('connection', (socket) => {
  // adding new socket to the pool
  socketPool.push(socket);

  // when data is received from a socket
  // log stuff, then send appropriate content to other sockets
  socket.on('data', (payload) => {
    let content = JSON.parse(Buffer.from(payload).toString());
    let event = content.event;
    let order = content.order;

    if (event === 'pickup') {
      /*
    time: new Date().toString().slice(0, 24),
    store: faker.company.companyName(),
    id: faker.random.uuid(), 
    customer: faker.name.findName(),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`
      */
     console.log('pickup');
     console.log(`- TIME: ${order.time}`);
     console.log(`- STORE: ${order.store}`);
     console.log(`- ORDERID: ${order.id}`);
     console.log(`- CUSTOMER: ${order.customer}`);
     console.log(`- ADDRESS: ${order.address}`);
    }

    if (event === 'in-transit') {
      console.log(`in-transit order # ${order.id}`);
    }

    if (event === 'delivered') {
      console.log(`delivered order # ${order.id}`);
    }

    socketPool.forEach(socket => {
      socket.write(payload);
    });
  });
  console.log('A socket has connected.');
  
});

