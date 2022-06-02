var Listingfy = require('../pageobjects/listingfy.doctor.page');
var data = require('../data/testdata.json');

describe('Verification of Landing Page - Listingfy Doctor', () => {
    it('To verify navigation presence', async () =>{
        await Listingfy.openListingfyDoctor();
        await browser.pause(8000);
        await expect(Listingfy.nav_aboutus()).toBeDisplayed();
        await expect(Listingfy.nav_aboutus()).toBeClickable();
        await expect(Listingfy.nav_contactus()).toBeDisplayed();
        await expect(Listingfy.nav_contactus()).toBeClickable();
        await expect(Listingfy.nav_home()).toBeDisplayed();
        await expect(Listingfy.nav_home()).toBeClickable();
        await expect(Listingfy.nav_team()).toBeDisplayed();
        await expect(Listingfy.nav_team()).toBeClickable();
        await expect(Listingfy.nav_dietitians()).toBeDisplayed();
        await expect(Listingfy.nav_dietitians()).toBeClickable();
    });

    it('To verify Query Submission', async () => {
        await Listingfy.openListingfyDoctor();
        await Listingfy.submitQuery(data.listingfydoctor.name_valid, data.listingfydoctor.email_valid, data.listingfydoctor.mobileno_valid, data.listingfydoctor.subject_valid, data.listingfydoctor.message_valid);
        await browser.pause(2000);
        //await expect($('#contact-form-box').getText()).toEqual("Query submitted successfully");
        await expect(Listingfy.buttonPresent()).not.toBeDisplayed();
    });
});
