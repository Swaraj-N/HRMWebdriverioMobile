import { expect } from 'chai';
import testData from '../testData/data'
const cardDetailsLocators = {
    cardNumberTxtField: {
        android: "//android.widget.EditText[@hint='Card Number']",
        web: "//*[@placeholder='Card Number']",
        mweb: "//*[@placeholder='Card Number']"
    },
    expiryDateTxtField: {
        android: "//android.widget.EditText[@hint='Expiry Date (MM/YY)']",
        web: "//*[@placeholder='Expiry Date (MM/YY)']",
        mweb: "//*[@placeholder='Expiry Date (MM/YY)']"
    },
    cvvTxtField: {
        android: "//android.widget.EditText[@hint='CVV']",
        web: "//*[@placeholder='CVV']",
        mweb: "//*[@placeholder='CVV']"
    },
    cardHolderName: {
        android: "//android.widget.EditText[@hint='Cardholder Name']",
        web: "//*[@placeholder='Cardholder Name']",
        mweb: "//*[@placeholder='Cardholder Name']"
    },
    payBtn: {
        android: "//android.widget.Button[@content-desc='Pay Now']",
        web: "//*[text()='Pay Now']",
        mweb: "//*[text()='Pay Now']"
    },
    otpTxtField: {
        android: "//android.widget.EditText[@hint='OTP']",
        web: "//*[@placeholder='OTP']",
        mweb: "//*[@placeholder='OTP']"
    },
    submitBtn: {
        android: "//android.widget.Button[@content-desc='Submit']",
        web: "//*[text()='Submit']",
        mweb: "//*[text()='Submit']"
    },
    successNotification: {
        android: "//android.view.View[@content-desc='Payment Successful']",
        web: "//*[text()='Payment Successful']",
        mweb: "//*[text()='Payment Successful']"
    },
    okBtn: {
        android: "//android.widget.Button[@content-desc='OK']",
        web: "//*[text()='OK']",
        mweb: "//*[text()='OK']"
    }
};
class CardDetailsScreen {
    async enterCardDetails() {
        await (await $(cardDetailsLocators.cardNumberTxtField)).click()
        await (await $(cardDetailsLocators.cardNumberTxtField)).setValue(testData.cardDetails.CardNumber)
        await (await $(cardDetailsLocators.expiryDateTxtField)).click()
        await (await $(cardDetailsLocators.expiryDateTxtField)).setValue(testData.cardDetails.ExpiryDate)
        await (await $(cardDetailsLocators.cvvTxtField)).click()
        await (await $(cardDetailsLocators.cvvTxtField)).setValue(testData.cardDetails.CVVNumber)
        await (await $(cardDetailsLocators.cardHolderName)).click()
        await (await $(cardDetailsLocators.cardHolderName)).setValue(testData.cardDetails.CardHolderName)
        await (await $(cardDetailsLocators.payBtn)).click()
    }
    async enterOTP() {
        await (await $(cardDetailsLocators.otpTxtField)).click()
        await (await $(cardDetailsLocators.otpTxtField)).setValue(testData.cardDetails.Otp)
        await (await $(cardDetailsLocators.submitBtn)).click()
    }

    async verifySuccessMessage() {
        var message = await (await $(cardDetailsLocators.successNotification)).getText()
        var messages=["Payment Successful",""]
        expect(message, "Success Message is not same").to.be.oneOf(messages)
        await (await $(cardDetailsLocators.okBtn)).click()
    }
}
module.exports = new CardDetailsScreen()