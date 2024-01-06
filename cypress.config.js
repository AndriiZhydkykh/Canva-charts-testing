const { defineConfig } = require("cypress");
const initCypressMousePositionPlugin = require('cypress-mouse-position/plugin');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      initCypressMousePositionPlugin(on);
    },
     viewportWidth: 1024,
     viewportHeight: 768,


  },
});
