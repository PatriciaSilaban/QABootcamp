export default class DirectoryPage{
    static get usernameInput() {
        return cy.get('input[placeholder="Username"]');
    }

    static get passwordInput() {
        return cy.get('input[placeholder="Password"]');
    }

    static get loginButton() {
        return cy.get('button[type="submit"]');
    }

    static get mainMenuDirectory() {
        return cy.get('.oxd-main-menu-item').contains('Directory');
    }

    static get pageHeader() {
        return cy.get('.oxd-text.oxd-text--h6');
    }

    static visitLoginPage() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    static login(username, password) {
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.loginButton.click();
    }

    static navigateToDirectory() {
        this.mainMenuDirectory.click();
    }

    static verifyDirectoryPage() {
        this.pageHeader.should('contain.text', 'Directory');
    }
}
