class LoginPage {
    getLoginInput() {
        return cy.get('#user_email');
    }
    getPasswordInput() {
        return cy.get('#user_password');
    }
    getSignInButton() {
        return  cy.contains('button', 'Log in');
    }
}
export default LoginPage;