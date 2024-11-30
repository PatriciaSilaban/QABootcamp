/// <reference types="cypress" />
import DirectoryPage from "../../pom/directory/directory.cy";

describe('Fitur Directory', () => {
    it('Test Directory Functionality', () => {
        // Akses halaman login
        DirectoryPage.visitLoginPage();

        // Login dengan kredensial valid
        DirectoryPage.login('Admin', 'admin123');

        // Verifikasi berhasil login dan menuju dashboard
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-topbar-header-breadcrumb').should('contain.text', 'Dashboard');

        // Klik menu Directory
        DirectoryPage.navigateToDirectory();

        // Verifikasi halaman Directory ditampilkan
        cy.url().should('include', '/directory');
        DirectoryPage.verifyDirectoryPage();
    });
});
