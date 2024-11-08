class TransectionPage {
    selectorList() {
        const selector = {
            inconTransectionPage: ".MuiStepIcon-root",
            avatarInconTransection: ".MuiListItemAvatar-root",
            placeholderAmount: "[placeholder='Amount']",
            placeholderAddNote: "[placeholder='Add a note']",
            paytButton: "[data-test='transaction-create-submit-payment']",
            alertSuccessPayment: '[data-test="alert-bar-success"]',

        }
        return selector
    }
    confirmTransectionPage() {
        cy.get(this.selectorList().inconTransectionPage).contains('1')
    }
    clickAvatarTransection() {
        cy.get(this.selectorList().avatarInconTransection).eq(0).click()
    }
    fillTransection(amuont, addNote){
        cy.get(this.selectorList().placeholderAmount).type(amuont)
        cy.get(this.selectorList().placeholderAddNote).type(addNote)
    }
    clickPayButton() {
        cy.get(this.selectorList().paytButton).click()
    }
    alertSuccess() {
        cy.get(this.selectorList().alertSuccessPayment).should('be.visible')
    }
}
export default TransectionPage