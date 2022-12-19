// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const baseUrl = "https://search.spockanalytics.xyz/0xC081996E8FfD1dA3F4784C4B8b6Ef8E07333163E";
const numTabs = 4
cypress.run({
    browser: 'chrome',
    parallel: true,
    parallelism: numTabs,
    spec: testPaths,
    env: {
      baseUrl: baseUrl
    }
  }).then((results) => {
    // Handle the test results
    console.log(results)
})