

/*module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },

    specPattern: '**'/*.cy.js',
    baseUrl: 'https://example.cypress.io',
  },
  
};

const { defineConfig } = require('cypress')
module.exports = defineConfig({
  e2e: {
    // e2e options here

    specPattern: '**'/*.cy.js",
    baseUrl: 'https://example.cypress.io',
  }
})*/

const { defineConfig } = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      });
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/features/*.feature',
    baseUrl: 'https://abdul-wahab-2023-04-14.cookieclickertechtest.airelogic.com/',
    chromeWebSecurity: false,
    reporter: 'mochawesome',
    reporterOptions:
    {
      charts: true,
     // reportDir: 'cypress/reports',
      overwrite: true,
      html: false,
      json: true
    }
  },
});