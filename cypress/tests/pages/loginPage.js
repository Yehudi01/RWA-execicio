class LoginPage {
    selectorList() {
        const selectors = {
            loginName: "[type='text']",
            loginPassword: "[type='password']",
            loginButton: "[type='submit']",
            errorLogin: "[data-test='signin-error']"
          } 
          return selectors
    }
    accessLoginPage() {
        cy.visit('signin')
    }
    fieldUserLogin(username, password) {
        cy.get(this.selectorList().loginName).type(username)
        cy.get(this.selectorList().loginPassword).type(password)
    }
    clickButtonLogin() {
        cy.get(this.selectorList().loginButton).click()
    }
    errorAlertLogin() {
        cy.get(this.selectorList().errorLogin).should('contain', 'Username or password is invalid')
    }
    
}
export default LoginPage