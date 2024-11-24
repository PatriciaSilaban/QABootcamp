describe('Fitur Login', () => {
  it('Test Function Login with Valid Credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[placeholder="Username"]').should('be.visible').type('Admin');
    cy.get('input[placeholder="Password"]').should('be.visible').type('admin123');
    cy.get('button[type="submit"]').should('be.visible').click();

    cy.url().should('include', '/dashboard');
    cy.get('.oxd-topbar-header-breadcrumb').should('contain.text', 'Dashboard');

    cy.screenshot('Login_Valid');
  });

  it('Test Function Login with Unvalid Username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[placeholder="Username"]').should('be.visible').type('Iniusername');
    cy.get('input[placeholder="Password"]').should('be.visible').type('admin123');
    cy.get('button[type="submit"]').should('be.visible').click();
    
    cy.get('.oxd-alert-content').should('contain.text', 'Invalid credentials');
    
    cy.screenshot('Login_Unvalid_Username');
  });

  it('Test Function Login with Unvalid Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('inipassword');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('contain.text', 'Invalid credentials');
  
    cy.screenshot('Login_Unvalid_Password');
  });

  it('Test Function Unvalid Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('button[type="submit"]').should('be.visible').click();

    cy.get('.oxd-input-group > .oxd-text').first().should('contain.text', 'Required');
    cy.get('.oxd-input-group > .oxd-text').last().should('contain.text', 'Required');
  
    cy.screenshot('Login_Unvalid');
  });
});