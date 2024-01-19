const { defineConfig } = require("cypress");
const cucumber =  require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config),
      on("file:preprocessor", cucumber())
     
    },
    specPattern: "cypress/e2e/cucumber/feature/*.feature",
    baseUrl: 'https://www.automationexercise.com/login'
  },
});
