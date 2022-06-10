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
        return $('.#jobs_tvwxt > div > div:nth-child(2) > div:nth-child(1) > a > div > div > div.d-flex.justify-content-between > div.apply-btn > button');
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