const Page = require('./page')

class CarShowroom extends Page {

    openListingfyCarShowroom() {
        this.open("https://www.listingfy.in/preview/ed09a103-ff4e-4778-875b-4eb79ad37820");
    }
    nav_home()
    {
        return $('=Home');
    }
    /**
     * define selectors using getter methods
     */
    get inputname() {
        return $('[name="name"]');
    }
    get inputemail() {
        return $('[name="email"]');
    }
    get inputmobileno() {
        return $('[name = "mobile"]')
    }
    get inputsubject(){
        return $('[name = "subject"]');
    }
    get inputmessage() {
        return $('[name ="message"]');
    }
    get btnSubmit() {
        return $('button[type="submit"]');
    }

    buttonPresent()
    {
        return $('button[type="submit"]');
    }

    applyJobButton()
    {
        return $('//*[@id="jobs_tvwxt"]/div/div[2]/div[1]/a/div/div/div[1]/div[2]/button');
    }
    async submitQuery(username, email, mobileno, subject, message) {
        await this.inputname.setValue(username);
        await this.inputemail.setValue(email);
        await this.inputmobileno.setValue(mobileno);
        await this.inputsubject.setValue(subject);
        await this.inputmessage.setValue(message);
        await this.btnSubmit.click();
    }

    async verifyApplyJob() {
        await this.applyJobButton().click();
    }
}
module.exports = new CarShowroom();