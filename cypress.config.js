const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://erickwendel.github.io/vanilla-js-web-app-example/',
    viewportHeight: 1080,
    viewportWidth: 1920
  },
});
