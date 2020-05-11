const net = require('net');
const socket = net.Socket();

socket.connect({port: 3000, host: 'localhost'}, () => {
  console.log('Connected to TCP server!');
});

socket.on('data', (payload) => {
  // console.log('received:', JSON.parse(Buffer.from(payload).toString()));
  payload = JSON.parse(Buffer.from(payload).toString());
  let event = payload.event;
  let order = payload.order;

  // let {event, order} = payload;

  if (event === 'pickup') {
    setTimeout(() => {
      console.log(`picked up order # ${order.id}`);
      socket.write(JSON.stringify({event: 'in-transit', order: order}));

      setTimeout(() => {
        console.log(`delivered order # ${order.id}`);
        socket.write(JSON.stringify({event: 'delivered', order: order}));
      }, 3000)
    }, 1000);
  }
});
