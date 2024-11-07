import { log } from "console"
import userDate from "../fixtures/userDate.json"
import LoginPage from "../pages/loginPage"
import MenuPage from "../pages/menuPage"
import TransectionPage from "../pages/transectionPage"

const loginPage = new LoginPage()
const menuPage = new MenuPage()
const transectionPage = new TransectionPage()

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.fieldUserLogin(userDate.userSuccess.username, userDate.userSuccess.password)
    loginPage.clickButtonLogin()

    menuPage.confirmMenuPage()
    menuPage.clickButtonTransection()
    
    transectionPage.confirmTransectionPage()
    transectionPage.clickAvatarTransection()
    transectionPage.fillTransection()
    transectionPage.clickPayButton()
    transectionPage.alertSuccess()
  })
})