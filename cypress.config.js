const { defineConfig } = require("cypress"); 

module.exports = defineConfig({
  // The rest of the Cypress config options go here...  
  viewportWidth: 1440,
  viewportHeight: 900,
  projectId: "tmgfnk",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
