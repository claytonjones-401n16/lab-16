'use strict';

const emitter = require('./events.js');

const driverPickup = require('./eventHandlers/driverPickup.js');

const driverInTransit = require('./eventHandlers/driverInTransit.js');

emitter.on('pickup', driverPickup);

emitter.on('in-transit', driverInTransit);