describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[type='text']").type("Heath93")
    cy.get("[type='password']").type("s3cret")
    cy.get("[type='submit']").click()
  })
})