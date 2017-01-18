var Analytics = require('@segment/analytics.js-core').constructor;
var SatisMeter = require('./lib/');

var options = {
  apiKey: 'G7fUqHM4sKwwWBMa'
};

var analytics = new Analytics();
var satismeter = new SatisMeter(options);

analytics.use(SatisMeter);
analytics.add(satismeter);

analytics.initialize();
analytics.identify('id2', {
  createdAt: new Date(),
  plan: 'Gold',
  planPrice: 99,
  isAdmin: true,
  address: {
    street: 'Ceska',
    city: 'Prague'
  }
});
