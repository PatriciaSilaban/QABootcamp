describe('Fitur Login', () => {
  it('Test Function Login with Valid Credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[placeholder="Username"]').should('be.visible').type('Admin');
    cy.get('input[placeholder="Password"]').should('be.visible').type('admin123');
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary');

    cy.get('button[type="submit"]').should('be.visible').click();

    cy.wait('@actionSummary');

    cy.url().should('include', '/dashboard');
    cy.get('.oxd-topbar-header-breadcrumb').should('contain.text', 'Dashboard');
  });

  it('Test Function Login with Invalid Username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[placeholder="Username"]').should('be.visible').type('Iniusername');
    cy.get('input[placeholder="Password"]').should('be.visible').type('admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('invalidUsername');

    cy.get('button[type="submit"]').should('be.visible').click();

    cy.wait('@invalidUsername').then((interception) => {

      expect(interception.response.statusCode).to.eq(200); 
      expect(interception.response.body.errorMessage).to.include('Invalid credentials');
    });

    cy.get('.oxd-alert-content').should('contain.text', 'Invalid credentials');
  });

  it('Test Function Login with Invalid Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('inipassword');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('invalidPassword');

    cy.get('button[type="submit"]').click();

    cy.wait('@invalidPassword').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body.errorMessage).to.include('Invalid credentials');
    });

    cy.get('.oxd-alert-content').should('contain.text', 'Invalid credentials');
  });

  it('Test Function Login_Invalid (No Input)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');

    cy.get('button[type="submit"]').should('be.visible').click();

    cy.wait(1000);

    cy.get('.oxd-input-group > .oxd-text').first().should('contain.text', 'Required');
    cy.get('.oxd-input-group > .oxd-text').last().should('contain.text', 'Required');
  });
});