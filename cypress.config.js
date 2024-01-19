const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    viewportHeight: 1000,
    viewportWidth: 1800,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    baseUrl: "https://www.automationexercise.com/",
  },
});
