describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {

    const selectorList = {


    }
    cy.visit('signup')
    cy.get("[name='firstName").type('Zaquel')
    cy.get("[name='lastName']").type('Santos')
    cy.get("[name='username']").type('Zac0770')
    cy.get("[name='password']").type('s3cret')
    cy.get("[name='confirmPassword']").type('s3cret')
    cy.get("[data-test='signup-submit']").click()
    cy.visit("http://localhost:3000/signin")
  })
})

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('signup')
    cy.get("[data-test='signup-submit']").click()
    cy.get("#firstName-helper-text").should('contain', 'First Name is required')
  });
});