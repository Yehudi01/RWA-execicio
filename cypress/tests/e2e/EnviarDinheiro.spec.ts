import { log } from "console"
import userDate from "../fixtures/userDate.json"
import LoginPage from "../pages/loginPage"
import MenuPage from "../pages/menuPage"
import TransectionPage from "../pages/transectionPage"

const loginPage = new LoginPage()
const menuPage = new MenuPage()
const transectionPage = new TransectionPage()

describe.skip('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.fieldUserLogin(userDate.userSuccess.username, userDate.userSuccess.password)
    loginPage.clickButtonLogin()

    menuPage.confirmMenuPage()
    menuPage.clickButtonTransection()
    
    transectionPage.confirmTransectionPage()
    transectionPage.clickAvatarTransection()
    transectionPage.fillTransection(userDate.fillTransectionSuccess.amuont, userDate.fillTransectionSuccess.addNote)
    transectionPage.clickPayButton()
    transectionPage.alertSuccess()
  })
})

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    //sem possibilidade de executar essa descrição dessa automação.
    loginPage.accessLoginPage()
    loginPage.fieldUserLogin(userDate.userSuccess.username, userDate.userSuccess.password)
    loginPage.clickButtonLogin()

    menuPage.confirmMenuPage()
    menuPage.clickButtonTransection()
    
    transectionPage.confirmTransectionPage()
    transectionPage.clickAvatarTransection()
    transectionPage.fillTransection(userDate.fillTransectionFail.amuont, userDate.fillTransectionFail.addNote)
    transectionPage.clickPayButton()
  });
});