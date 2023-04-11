/// <reference types="cypress" />

describe("GOIT homework 2, task 1", () => {
  beforeEach(() => {
    cy.visit("https://www.edu.goit.global/account/login");
  })
  it('logs in and out 1', () => {
    cy.login('user888@gmail.com', '1234567890');
    cy.get('#open-navigation-menu-mobile').click();
    cy.contains('button', 'Log out').click();
  })
  it('logs in and out 2', () => {
    cy.login('testowyqa@qa.team', 'QA!automation-1');
    cy.get('#open-navigation-menu-mobile').click();
    cy.contains('button', 'Log out').click();
  })
});