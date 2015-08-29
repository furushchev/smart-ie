var _ = require('lodash');

var files = [
  '_index',
  'send'
];

var routes = _.map(files, function(f) {
  return require('./' + f);
});

function Routing(app) {
  routes.forEach(function(r) {
    if (r.get_url && r.get) {
      if (r.get_url instanceof Array) {
        r.get_url.forEach(function(u) {
          console.log("registered GET " + u);
          app.get(u, r.get);
        });
      }
      else {
        console.log("registered GET " + r.get_url);
        app.get(r.get_url, r.get);
      }
    } // endif get
    if (r.post_url && r.post) {
      if (r.post_url instanceof Array) {
        r.post_url.forEach(function(u) {
          console.log("registered POST " + u);
          app.post(u, cors(),  r.post);
        });
      }
      else {
        console.log("registered POST " + r.post_url);
        app.post(r.post_url, cors(), r.post);
      }
    } // endif post
    if (r.put_url && r.put) {
      if (r.put_url instanceof Array) {
        r.put_url.forEach(function(u) {
          console.log("registered PUT " + u);
          app.put(u, r.put);
        });
      }
      else {
        console.log("registered PUT " + r.put_url);
        app.put(r.put_url, r.put);
      }
    } // endif put
  });
}
exports.routing = Routing;
