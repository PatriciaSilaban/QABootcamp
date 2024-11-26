/// <reference types="cypress" />
import LoginPage from "../../pom/Login/login.cy";

describe('Fitur Login', () => {
    it('Login with Valid Credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        LoginPage.inputUsername().type('Admin');
        LoginPage.inputPassword().type('admin123');
        LoginPage.btnLogin().click();

        cy.url().should('include', '/dashboard');
        LoginPage.dashboardPage().should('contain.text', 'Dashboard');
    });
    
    it('Login with Invalid Username', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        LoginPage.inputUsername().type('Iniusername');
        LoginPage.inputPassword().type('admin123');
        LoginPage.btnLogin().click();

        cy.url().should('not.include', '/dashboard');
        LoginPage.verifyLoginPage().should('be.visible');

        cy.get('.oxd-alert').should('contain.text', 'Invalid credentials');
    });
  
    it('Login with Invalid Password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        LoginPage.inputUsername().type('Admin');
        LoginPage.inputPassword().type('inipassword');
        LoginPage.btnLogin().click();
  
        cy.url().should('not.include', '/dashboard');
        LoginPage.verifyLoginPage().should('be.visible');

        cy.get('.oxd-alert').should('contain.text', 'Invalid credentials');
    });
  
    it('Invalid Login (Empty Credentials)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        LoginPage.btnLogin().click();

        LoginPage.verifyLoginPage().should('be.visible');
        cy.get('.oxd-input-group > .oxd-text').first().should('contain.text', 'Required');
        cy.get('.oxd-input-group > .oxd-text').last().should('contain.text', 'Required');
    });
});