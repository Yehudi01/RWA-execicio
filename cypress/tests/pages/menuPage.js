class MenuPage {
    selectorList() {
        const selector = {
            menuPage: '.MuiDrawer-paperAnchorDockedLeft',
            inconMenuPage: "[data-test='sidenav-home']",
            clickButtonTransection: "[href='/transaction/new']",
            clickMineSection: "[href='/personal']",
            noTransactionReceive: "[data-test='empty-list-header']"
        }
        return selector
    }
    confirmMenuPage() {
        cy.get(this.selectorList().menuPage)
        cy.get(this.selectorList().inconMenuPage).contains('Home')
    }
    clickButtonTransection() {
        cy.get(this.selectorList().clickButtonTransection).contains('New').click()
    }
    clickSectionMine() {
        cy.get(this.selectorList().clickMineSection).click()
    }
    confirmNoTransaction() {
        cy.get(this.selectorList().noTransactionReceive).contains('No Transactions')
    }
}
export default MenuPage