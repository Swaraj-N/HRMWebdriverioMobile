import cardDetailsScreen from "../screenObjects/cardDetails.screen"
import testData from "../testData/data"
const expect = require('chai').expect

class WorkFlowLibrary {
    /**
     * @description "This method is used to Enter Card Details"
     * @param {string} cardNumber 
     * @param {string} expiryDate 
     * @param {string} cvvNumber 
     * @param {string} cardholderName 
     * @author SWARAJ <swaraj.t@testyantra.com>
      */
    async enterCardDetailsAndProceedToPay() {
        await (await cardDetailsScreen.cardNumberTxtField).waitForDisplayed({ timeout: 3000, timeoutMsg: "Card Number Text field is not clickable" })
        await (await cardDetailsScreen.cardNumberTxtField).click()
        await (await cardDetailsScreen.cardNumberTxtField).setValue(testData.cardDetails.CardNumber)
        await (await cardDetailsScreen.expiryDateTxtField).waitForDisplayed({ timeout: 3000, timeoutMsg: "Expiry date Text field is not clickable" })
        await (await cardDetailsScreen.expiryDateTxtField).click()
        await (await cardDetailsScreen.expiryDateTxtField).setValue(testData.cardDetails.ExpiryDate)
        await (await cardDetailsScreen.cvvTxtField).waitForDisplayed({ timeout: 3000, timeoutMsg: "Cvv Text field is not clickable" })
        await (await cardDetailsScreen.cvvTxtField).click()
        await (await cardDetailsScreen.cvvTxtField).setValue(testData.cardDetails.CVVNumber)
        await (await cardDetailsScreen.cardHolderName).waitForDisplayed({ timeout: 3000, timeoutMsg: "Card Holder Text field is not clickable" })
        await (await cardDetailsScreen.cardHolderName).click()
        await (await cardDetailsScreen.cardHolderName).setValue(testData.cardDetails.CardHolderName)
        await (await cardDetailsScreen.payBtn).waitForDisplayed({ timeout: 3000, timeoutMsg: "Pay Button is not clickable" })
        await (await cardDetailsScreen.payBtn).click()
    }

    async enterOtpAndSubmit() {
        await (await cardDetailsScreen.otpTxtField).waitForDisplayed({ timeout: 5000, timeoutMsg: "OTP Text field is not displayed" })
        await (await cardDetailsScreen.otpTxtField).click()
        await (await cardDetailsScreen.otpTxtField).setValue(testData.cardDetails.Otp)
        await (await cardDetailsScreen.submitBtn).click()
    }

    async verifySuccessMessage() {
        var message = await (await cardDetailsScreen.successNotification).getAttribute('content-desc')
        expect(message,"Payment is not successfull").to.eq("Payment Successful")
        await (await cardDetailsScreen.okBtn).click()
    }
}
export default new WorkFlowLibrary