class LoginPage {
    public get email() {return $("input[name='email']")}

    public get password() {return $("input[name='password']")}

    public get nextBtn() {return $("button[title='Next']")}
    
    public get loginBtn() {return $("button[title='Log in']")}

    public get errorMessage() {return $("div[data-test-component='loginPage__password field']")
    .$("div[data-test-component='errorMessage__text text text--type-system3']")}

    public get forgotPassword() {return $("//h5[text()='Forgot your password?']")}

    public get pwdRecoveryTitle() {return $("//h1[text()='Password recovery']")}

    public get SendTheLinkBtn() {return $("button[title='Send the link']")}

    public get pwdRecoveryMsg() {return $("div[data-test-component='passwordRecoveryPage__submitMessage']")}

    public get cookiesBar() {return $("div[data-test-component='cookiesConsentBanner']")}

    public get acceptCookiesBtn() {return $("button[title='Accept']")}

    public get signUpBtn() {return $("button[title='Sign up']")}

    enterEmail(text: string) {
        this.email.waitForDisplayed()
        this.email.setValue(text)
        this.nextBtn.click()
    }

    enterPassword(text: string) {
        this.password.waitForDisplayed()
        this.password.setValue(text)
    }

    open() {
        browser.url('/login')
    }

    checkPageTitle (pageTitle: string) {
        expect(browser).toHaveTitle(pageTitle);
    }

    checkEmailValue (email: string) {
        expect(this.email).toHaveValue(email);
    }

    checkLoginErrorMessage (errorMessageText: string) {
        this.errorMessage.waitForDisplayed();
        expect(this.errorMessage).toBeDisplayed();
        expect(this.errorMessage).toHaveText(errorMessageText);
    }

    checkNextButtonIsDisabled () {
        expect(this.nextBtn).toBeDisabled()
        expect(this.loginBtn).not.toBeDisplayed()
    }

    checkForgotPasswordPage (email: string) {
        expect(this.email).toHaveValue(email)
        expect(this.pwdRecoveryTitle).toBeDisplayed()
    }

    checkPasswordField () {
        expect(this.password).toHaveAttribute('type', 'password')
    }

}

module.exports = new LoginPage();