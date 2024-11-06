import { log } from "console"
import userDate from "../fixtures/userDate.json"
import LoginPage from "../pages/loginPage"

const loginPage = new LoginPage()

describe('Login com sucesso', () => {
 

  it('Deve fazer login com um usuário válido', () => {
  loginPage.accessLoginPage()
  loginPage.fieldUserLogin(userDate.userSuccess.username, userDate.userSuccess.password)
  loginPage.clickButtonLogin()
  })
})

describe('Tentar fazer login com credenciais inválidas', () => {

  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage()
    loginPage.fieldUserLogin(userDate.userFail.username, userDate.userFail.password)
    loginPage.clickButtonLogin()
    loginPage.errorAlertLogin()
  });
});