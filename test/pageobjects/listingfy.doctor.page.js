const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Doctor extends Page {
    openListingfyDoctor (){
        this.open("https://www.listingfy.in/preview/b44d3905-97a4-4e76-b6c5-9682a8d4df0d");
    }
    nav_home()
    {
        return $('=Home');
    }
    nav_aboutus()
    {
        return $('=About Us');
    }
    nav_contactus ()
    {
        return $('=Contact Us');
    }
    nav_team ()
    {
        return $('=Team');
    }
    nav_dietitians ()
    {
        return $('=Dietitians');
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
    get inputsubject() {
        return $('[name="subject"]');
    }

    get inputmessage() {
        return $('[name="message"]');
    }

    get inputmobileno() {
        return $('[name="mobile"]');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    buttonPresent()
    {
        return $('button[type="submit"]');
    }


    async submitQuery(username, email, mobileno, message, subject) {
        await this.inputname.setValue(username);
        await this.inputemail.setValue(email);
        await this.inputmobileno.setValue(mobileno);
        await this.inputmessage.setValue(message);
        await this.inputsubject.setValue(subject);
        await this.btnSubmit.click();
    }


}
module.exports = new Doctor();