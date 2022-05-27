var Listingfy = require('../pageobjects/listingfy.page');
var data = require('../data/testdata.json');

describe('Verification of Landing Page - Listingfy Creche', ()=>{

    it('To verify navigation presence', async ()=>{
        await Listingfy.openListingfyCreche();
        await expect(Listingfy.nav_about()).toBeDisplayed();
        await expect(Listingfy.nav_about()).toBeClickable();
        await expect(Listingfy.nav_contactus()).toBeDisplayed();
        await expect(Listingfy.nav_contactus()).toBeClickable();
        await expect(Listingfy.nav_gallery()).toBeDisplayed();
        await expect(Listingfy.nav_gallery()).toBeClickable();
        await expect(Listingfy.nav_home()).toBeDisplayed();
        await expect(Listingfy.nav_home()).toBeClickable();
        await expect(Listingfy.nav_learning()).toBeDisplayed();
        await expect(Listingfy.nav_learning()).toBeClickable();
        await expect(Listingfy.nav_programme()).toBeDisplayed();
        await expect(Listingfy.nav_programme()).toBeClickable();
    });   

    it('To verify Query Submission', async ()=>{
        await Listingfy.openListingfyCreche();
      await Listingfy.submitQuery("rk","ss@ss.com","9826567763","hi message","sub");
      await browser.pause(2000);
      //await expect($('#contact-form-box').getText()).toEqual("Query submitted successfully");
      await expect(Listingfy.buttonPresent()).not.toBeDisplayed();
      
    });   

});



