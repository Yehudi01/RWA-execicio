class RegisterPage {
    selectorList() {
        const selector = {
            regFirstNamePage: "[name='firstName",
            regLastNamePage: "[name='lastName']",
            regUserNamePage: "[name='username']",
            regPassWordPage: "[name='password']",
            regConfPassWordPage: "[name='confirmPassword']",
            regButtonPage: "[data-test='signup-submit']",
            regAlertFail: "#firstName-helper-text"
          }
          return selector
    }
}
export default RegisterPage