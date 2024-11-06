describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[type='text']").type("Heath93")
    cy.get("[type='password']").type("s3cret")
    cy.get("[type='submit']").click()
  })
})

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[type='text']").type("test")
    cy.get("[type='password']").type("s3cret")
    cy.get("[type='submit']").click()
    cy.get("[data-test='signin-error']").should('contain', 'Username or password is invalid')
  });
});