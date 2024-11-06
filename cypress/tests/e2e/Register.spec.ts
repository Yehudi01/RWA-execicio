describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get("[name='firstName']").type('Zaquel')
    cy.get("[name='lastName']").type('Santos')
    cy.get("[name='username']").type('Zac0770')
    cy.get("[name='password']").type('s3cret')
    cy.get("[name='confirmPassword']").type('s3cret')
    cy.get("[data-test='signup-submit']").click()
    cy.visit("http://localhost:3000/signin")
  })
})