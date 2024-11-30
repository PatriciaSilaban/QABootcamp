describe('Fitur Forgot Password', () => {
    it('Test Forgot Password Functionality', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
      cy.contains('Forgot your password?').should('be.visible').click();
  
      cy.url().should('include', '/auth/requestPasswordResetCode');
      cy.get('.oxd-text.oxd-text--h6').should('contain.text', 'Reset Password');
  
      cy.get('input[placeholder="Username"]').should('be.visible').type('Admin');
    
      cy.get('button[type="submit"]').should('be.visible').click();
  
      cy.url().should('include', '/auth/sendPasswordReset');
      
      cy.get('.orangehrm-forgot-password-wrapper').should('be.visible')
      .and('contain.text', 'Reset Password link sent successfully');
    });
  });