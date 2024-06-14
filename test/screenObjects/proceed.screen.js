const proceedLocators = {
    proceedBtn: {
        android: "//android.widget.Button[@content-desc='Proceed to Payment']",
        web: "//*[text()='Proceed to Checkout']",
        mweb: "//*[text()='Proceed to Checkout']"
    }
};
class ProceedScreen{
    async clickProceedBtn(){
        await (await $(proceedLocators.proceedBtn)).click()
    }
}
module.exports = new ProceedScreen()