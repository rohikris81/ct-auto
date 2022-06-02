const Page = require('./Page')

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
        return $('[type="submit"]');
    }
    buttonPresent() {
        return $('[type ="submit"]');
    }
    async submitQuery(username, email, mobileno, subject, message) {
        await this.inputname.setValue(username);
        await this.inputemail.setValue(email);
        await this.inputmobileno.setValue(mobileno);
        await this.inputsubject.setValue(subject);
        await this.inputmessage.setValue(message);
        await this.btnSubmit.click();
    }
}
module.exports = new CarShowroom();