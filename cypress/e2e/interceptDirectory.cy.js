describe('Fitur Directory', () => {
    it('Test Directory Functionality', () => {
        // Akses halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        // Login dengan kredensial valid
        cy.get('input[placeholder="Username"]').should('be.visible').type('Admin');
        cy.get('input[placeholder="Password"]').should('be.visible').type('admin123');
        cy.get('button[type="submit"]').should('be.visible').click();

        // Verifikasi berhasil login
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-topbar-header-breadcrumb').should('contain.text', 'Dashboard');

        // Intercept request untuk Directory
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory').as('viewDirectory');

        // Klik menu Directory
        cy.get('.oxd-main-menu-item').contains('Directory').should('be.visible').click();

        // Verifikasi navigasi ke halaman Directory
        cy.url().should('include', '/directory');
        cy.get('.oxd-text.oxd-text--h6').should('contain.text', 'Directory');

        // Tunggu hingga request untuk mengambil data Directory selesai (tanpa memverifikasi data)
        cy.wait('@viewDirectory');
    });
});