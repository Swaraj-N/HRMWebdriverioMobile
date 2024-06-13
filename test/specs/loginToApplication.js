/* IMPORTS */
const Loginscreen = require('../screenObjects/Login.screen')


/* SCRIPT */
describe(`Verify User is Able to login to the Application `, async () => {
    it("Verify Login", async () => {
       await Loginscreen.logintoApp();
       await (await Loginscreen.projectsButton).click()
    })
})