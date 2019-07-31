const requiredExample = require('/Users/serg/cypress/fixtures/example.json')

context('Cookies', () => {


  it('cy.getCookie() - get a browser cookie', () => {
  cy.visit("https://google.com");
    // https://on.cypress.io/getcookie
    cy.search(requiredExample.name, '.gLFyf');

    // cy.getCookie() yields a cookie object

  })

  });