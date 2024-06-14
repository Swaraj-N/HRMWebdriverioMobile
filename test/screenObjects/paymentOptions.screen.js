const paymentOptionLocators = {
    cardPayment: {
        android: "//android.view.View[@content-desc='Card']",
        web: "//*[text()='Card']",
        mweb: "//*[text()='Card']"
    }
};
class PaymentOptionsScreen{
    async selectCardPayment(){
       await (await $(paymentOptionLocators.cardPayment)).click()
    }
}
module.exports =new PaymentOptionsScreen()
