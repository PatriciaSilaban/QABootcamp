export default class ForgotPasswordPage{
    // Menggunakan selector static untuk elemen yang sering dipakai
    static get forgotPasswordLink() {
      return cy.contains('Forgot your password?');
    }
  
    static get usernameInput() {
      return cy.get('input[placeholder="Username"]');
    }
  
    static get submitButton() {
      return cy.get('button[type="submit"]');
    }
  
    static get resetPasswordMessage() {
      return cy.get('.orangehrm-forgot-password-wrapper');
    }
  
    static get headerText() {
      return cy.get('.oxd-text.oxd-text--h6');
    }
  
    // Metode untuk klik link "Forgot your password?"
    static clickForgotPassword() {
      this.forgotPasswordLink.should('be.visible').click();
    }
  
    // Metode untuk mengisi username/email
    static typeUsername(username) {
      this.usernameInput.should('be.visible').type(username);
    }
  
    // Metode untuk klik tombol submit
    static clickSubmit() {
      this.submitButton.should('be.visible').click();
    }
  
    // Verifikasi pesan reset password
    static verifyResetPasswordMessage() {
      this.resetPasswordMessage.should('be.visible').and('contain.text', 'Reset Password link sent successfully');
    }
  
    // Verifikasi header reset password
    static verifyHeaderText() {
      this.headerText.should('contain.text', 'Reset Password');
    }
  
    // Verifikasi URL setelah reset password dikirim
    static verifyUrl() {
      cy.url().should('include', '/auth/sendPasswordReset');
    }
  }
  