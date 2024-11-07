class MenuPage {
    selectorList() {
        const selector = {
            menuPage: '.MuiDrawer-paperAnchorDockedLeft',
            inconMenuPage: "[data-test='sidenav-home']",
            clickButtonTransection: "[href='/transaction/new']",
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
}
export default MenuPage