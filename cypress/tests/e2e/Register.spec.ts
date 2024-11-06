import userDate from "../fixtures/userDate.json"
import RegisterPage from "../pages/registerPage"

const registerPage = new RegisterPage()

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    registerPage.accessRegisterPage()
    registerPage.fillUserRegister(userDate.userRegisterSuccess.firstName, userDate.userRegisterSuccess.lastName, userDate.userRegisterSuccess.userName, userDate.userRegisterSuccess.password, userDate.userRegisterSuccess.confirmPassword)
    registerPage.buttonRegister()
    registerPage.confirmRegisterPage()
  })
})

describe('Tentar registrar um novo usuário com informações incompletas', () => {

  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    registerPage.accessRegisterPage()
    registerPage.buttonRegister()
    registerPage.alertErrorRegister()
  });
});