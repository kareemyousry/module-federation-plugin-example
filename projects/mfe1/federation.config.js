const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: "mfe1",

  exposes: {
    // Preferred way: expose corse-grained routes
    "./routes": "./projects/mfe1/src/app/mfe1.routes.ts",

    // Technically possible, but not preferred for Micro Frontends:
    // Exposing fine-grained components
    "./Component": "./projects/mfe1/src/app/my-tickets/my-tickets.component.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
