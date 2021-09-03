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
import "cypress-file-upload";

Cypress.Commands.add("visitweb", () => {
  cy.visit("https://admin.pkh.dojobox.id/");
});

Cypress.Commands.add("login", () => {
  cy.visit("https://admin.pkh.dojobox.id/");
  cy.get("#input-email", { force: true })
    .type("e@dojobox.id")
    .should("have.value", "e@dojobox.id");

  cy.get("#input-password", { force: true })
    .type("admin")
    .should("have.value", "admin");
  cy.wait(2000);
  cy.contains("Login").click();
});
