/* IMPORTS */
// import proceedScreen from "../screens/proceed.screen.Actions";
// import paymentOptionScreen from "../screens/paymentOptionScreen.Actions";
// import carddetailsScreenActions from "../screens/carddetails.screen.Actions";
// import workflowLib from "../workflowLibrary/workflowLib";
import proceedScreen from "../screenObjects/proceed.screen"
import paymentOptionsScreen from "../screenObjects/paymentOptions.screen"
import cardDetailsScreen from "../screenObjects/cardDetails.screen"



/* SCRIPT */
describe(`Verify user is able to do the payment`, async () => {
    it("Proceed to pay and Confirm Payment Success Message", async () => {
        await proceedScreen.clickProceedBtn()
        await paymentOptionsScreen.selectCardPayment()
        await cardDetailsScreen.enterCardDetails()
        await cardDetailsScreen.enterOTP()
        await cardDetailsScreen.verifySuccessMessage()
    })
})