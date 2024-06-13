/* IMPORTS */
// const expect = require('chai').expect

const allure = require('@wdio/allure-reporter')
require('dotenv').config({
    path: './config.env',
    override: true,
});

/* GETTERS AND METHODS */
class LoginScreen {

    get userNameTxtField() {
        return $("//android.widget.EditText[@text='Username']")
    }
    get passwordTxtField() {
        return $("//android.widget.EditText[@text='Password']")
    }
    get loginBtn() {
        return $("//android.widget.Button[@text='SIGN IN']")
    }

    get projectsButton() {
        return $("(//android.widget.ImageView[@resource-id='com.tyss.rmgyantra:id/navigation_bar_item_icon_view'])[2]")
    }

    async logintoApp() {
        await (await this.userNameTxtField).setValue(`${process.env.USERNAME}`);
        await allure.addStep(`Entered UserName is ${process.env.USERNAME}`)
        await (await this.passwordTxtField).setValue(`${process.env.PASSWORD}`);
        await allure.addStep(`Entered UserName is ${process.env.PASSWORD}`)
        await (await this.loginBtn).click();
        await (await this.projectsButton).waitForDisplayed({ timeout: 5000, timeoutMsg: "Projects button is not displayed" })
        await allure.addStep('Login Successfull')

    }
}
module.exports = new LoginScreen()