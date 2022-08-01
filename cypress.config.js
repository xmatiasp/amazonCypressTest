const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalSessionAndOrigin:true
  },
  reporter: 'mochawesome',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/report",
    charts: true,
    reportPageTitle: 'AmazonChallenge',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  }

});
