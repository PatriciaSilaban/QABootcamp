/// <reference types="cypress" />
import ForgotPasswordPage from "../../pom/forgotPassword/pomforgotPassword.cy";

describe('Fitur Forgot Password', () => {
    it('Test Forgot Password Functionality', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
        // Klik link "Forgot your password?"
        ForgotPasswordPage.clickForgotPassword();

        // Verifikasi navigasi ke halaman Forgot Password
        cy.url().should('include', '/auth/requestPasswordResetCode');
        ForgotPasswordPage.verifyHeaderText();

        // Isi username/email untuk reset password
        ForgotPasswordPage.typeUsername('Admin');
    
        // Klik tombol "Reset Password"
        ForgotPasswordPage.clickSubmit();
  
        // Verifikasi URL setelah permintaan reset dikirim
        ForgotPasswordPage.verifyUrl();
      
        // Validasi pesan konfirmasi reset password
        ForgotPasswordPage.verifyResetPasswordMessage();
    });
});