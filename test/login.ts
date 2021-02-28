import { assert } from "chai";

const loginPage = require("../page/loginPage")
const testData = require("../resources/testData")


describe("Grip Login Page", function () {
    this.retries(1)

    beforeEach("Open Login page", function () {
        loginPage.open();
    });

    afterEach("Reset cookies", function () {
        browser.deleteAllCookies();
    });

    it("GR-1. Validate that entered email displayed correctly", function () {
        loginPage.enterEmail(testData.validEmail);

        loginPage.checkEmailValue(testData.validEmail);
    });

    it("GR-2. Verify if a user will be able to login with a valid email and valid password.", function () {
        loginPage.enterEmail(testData.validEmail)
        loginPage.enterPassword(testData.validPassword)
        loginPage.loginBtn.click()

        loginPage.checkPageTitle('Grip successful login page title')
    });

    it("GR-3. Verify if a user cannot login with a valid email and an invalid password.", function () {
        loginPage.enterEmail(testData.notRegisteredEmail)
        loginPage.enterPassword(testData.invalidPassword)
        loginPage.loginBtn.click()

        loginPage.checkLoginErrorMessage("Invalid email or password")
    });

    it("GR-4. Verify the login page when the email field is blank that Submit button is not available for click", function () {
        loginPage.checkNextButtonIsDisabled()
    });

    it("GR-5. Verify the ‘Forgot Password’ functionality.", function () {
        loginPage.enterEmail(testData.validEmail)
        expect(loginPage.forgotPassword).toBeDisplayed()

        loginPage.forgotPassword.click()
        loginPage.checkForgotPasswordPage(testData.validEmail)

        loginPage.SendTheLinkBtn.click()
        expect(loginPage.pwdRecoveryMsg).toHaveText(testData.pwdRecoveryMsg)
    });

    it("GR-6. Verify if the data in password field is either visible as asterisk or bullet signs.", function () {
        loginPage.enterEmail(testData.validEmail)
        loginPage.enterPassword(testData.validPassword)

        loginPage.checkPasswordField()

        
    });

    it("GR-9. Verify if the ‘Enter’ key of the keyboard is working correctly on the login page.", function () {
        loginPage.enterEmail(testData.notRegisteredEmail)
        loginPage.enterPassword(testData.invalidPassword)
        browser.keys("\uE007"); 

        loginPage.checkLoginErrorMessage("Invalid email or password")
    });

    it("GR-10. Verify Accept cookies bar is shown and hidden after click", function () {
        expect(loginPage.cookiesBar).toBeDisplayed()

        loginPage.acceptCookiesBtn.click()
        expect(loginPage.cookiesBar).not.toBeDisplayed()
    });

    it("GR-11. Verify if Sign up window is open by click on Sign up button", function () {
        loginPage.signUpBtn.click()

        loginPage.checkPageTitle('Sign up page title')
    });

    it("GR-12. Verify the case when the entered email has incorrect format ", function () {
        loginPage.email.setValue(testData.invalidFormatEmail)

        loginPage.checkNextButtonIsDisabled()
    });
});