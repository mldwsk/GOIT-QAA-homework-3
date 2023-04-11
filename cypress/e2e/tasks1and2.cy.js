/// <reference types="cypress" />

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

describe("GOIT homework 3", () => {
  let homePage;
  let loginPage; 
  before(()=> {
    homePage = new HomePage(); 
    loginPage = new LoginPage();  
  })
  beforeEach(() => {
    cy.visit("https://www.edu.goit.global/account/login");
  })
  it('logs in and out with dataset 1', () => {
    cy.login('user888@gmail.com', '1234567890');
    homePage.getMenuButton().click();
    homePage.getSignOutButton().click();
  })
  it('logs in and out with dataset 2', () => {
    cy.login('testowyqa@qa.team', 'QA!automation-1');
    homePage.getMenuButton().click();
    homePage.getSignOutButton().click();
  })
});