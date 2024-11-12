import { log } from "console"
import userDate from "../fixtures/userDate.json"
import LoginPage from "../pages/loginPage"
import MenuPage from "../pages/menuPage"


const loginPage = new LoginPage()
const menuPage = new MenuPage()


describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    loginPage.accessLoginPage()
    loginPage.fieldUserLogin(userDate.sendMoneySucces.username, userDate.sendMoneySucces.password)
    loginPage.clickButtonLogin()

    menuPage.confirmMenuPage()
    
  })
})

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    //sem possibilidade de executar essa descrição dessa automação.
    loginPage.accessLoginPage()
    loginPage.fieldUserLogin(userDate.sendMoneyFail.username, userDate.sendMoneyFail.password)
    loginPage.clickButtonLogin()

    menuPage.confirmMenuPage()
    menuPage.clickSectionMine()
    menuPage.confirmNoTransaction()

    
  });
});