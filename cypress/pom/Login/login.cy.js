export default class LoginPage {
    static verifyLoginPage() {
        return cy.get('.oxd-text--h5').should('contain.text', 'Login');
    }

    static inputUsername() {
        return cy.get('input[placeholder="Username"]');
    }

    static inputPassword() {
        return cy.get('input[placeholder="Password"]');
    }

    static btnLogin() {
        return cy.get('button[type="submit"]');
    }
    static dashboardPage() {
        return cy.get('.oxd-topbar-header-breadcrumb');
    }
}