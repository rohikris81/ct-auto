

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Listingfy extends Page {
   
    openListingfyCreche() {
        this.open('https://www.listingfy.in/preview/9986ade4-8fcc-485a-856d-7d2933329cbf');
    }

    nav_home()
    {
        return $('=Home');    
        
    }

    nav_about()
    {
        return $('=About Us');     
        
    }

    nav_programme()
    {
        return ($('=Programmes'));    
        
    }

    nav_contactus()
    {
        return ($('=Contact Us'));    
        
    }


    nav_gallery()
    {
        return ($('=Gallery'));    
        
    }


    nav_learning()
    {
        return ($('=Learning Environment'));    
        
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



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async submitQuery(username, email, mobileno, message, subject) {
        await this.inputname.setValue(username);
        await this.inputemail.setValue(email);
        await this.inputmobileno.setValue(mobileno);
        await this.inputmessage.setValue(message);
        await this.inputsubject.setValue(subject);
        await this.btnSubmit.click();
    }


  
}

module.exports = new Listingfy();
