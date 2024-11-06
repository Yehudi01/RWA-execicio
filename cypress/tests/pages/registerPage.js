class RegisterPage {
    selectorList() {
        const selector = {
            regFirstNamePage: "[name='firstName",
            regLastNamePage: "[name='lastName']",
            regUserNamePage: "[name='username']",
            regPassWordPage: "[name='password']",
            regConfPassWordPage: "[name='confirmPassword']",
            regButtonPage: "[data-test='signup-submit']",
            regAlertFail: "#firstName-helper-text"
          }
          return selector
    }
    accessRegisterPage() {
        cy.visit('signup')
    }
    fillUserRegister(firtsName, lastName, userName, password, confirmPassword) {
        cy.get(this.selectorList().regFirstNamePage).type(firtsName)
        cy.get(this.selectorList().regLastNamePage).type(lastName)
        cy.get(this.selectorList().regUserNamePage).type(userName)
        cy.get(this.selectorList().regPassWordPage).type(password)
        cy.get(this.selectorList().regConfPassWordPage).type(confirmPassword)
    }
    buttonRegister() {
        cy.get(this.selectorList().regButtonPage).click()
    }
    confirmRegisterPage() {
        cy.visit("signin")
    }
    alertErrorRegister() {
        cy.get(this.selectorList().regAlertFail).should('contain', 'First Name is required')
    }
}
export default RegisterPage