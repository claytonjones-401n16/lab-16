'use strict';

const vendorThanks = require('../lib/eventHandlers/vendorThanks.js');
const driverInTransit = require('../lib/eventHandlers/driverInTransit.js');
const driverPickup = require('../lib/eventHandlers/driverPickup.js');
const vendorPickup = require('../lib/eventHandlers/vendorPickup.js');

const spy = jest.spyOn(console, 'log');

describe('events', () => {
  it('vendorPickup', () => {
    spy.mockClear();
    let payload = {
      time: 'today',
      store: 'clearly money laundering',
      orderID: 4, 
      customer: 'heisenberg',
      address: `new mexico`
    }

    vendorPickup(payload);
    expect(spy).toHaveBeenCalled();
  });

  it('driverPickup', () => {
    spy.mockClear();
    let payload = {
      time: 'today',
      store: 'clearly money laundering',
      orderID: 4, 
      customer: 'heisenberg',
      address: `new mexico`
    }

    driverPickup(payload);
    setTimeout(() => {
      expect(spy).toHaveBeenCalledWith(`DRIVER Picked up Order #${payload.orderID}`);
    }, 1000);
  });

  it('driverInTransit', () => {
    spy.mockClear();
    let payload = {
      time: 'today',
      store: 'clearly money laundering',
      orderID: 4, 
      customer: 'heisenberg',
      address: `new mexico`
    }

    driverInTransit(payload);
    expect(spy).toHaveBeenCalledWith(`EVENT in-transit Order #${payload.orderID}`);
  });

  it('vendorThanks', () => {
    spy.mockClear();
    let payload = {
      time: 'today',
      store: 'clearly money laundering',
      orderID: 4, 
      customer: 'heisenberg',
      address: `new mexico`
    }

    vendorThanks(payload);
    setTimeout(() => {
      expect(spy).toHaveBeenCalledWith(`VENDOR: Thanks for delivering Order #${payload.orderID}`);
    }, 500);
  });
});