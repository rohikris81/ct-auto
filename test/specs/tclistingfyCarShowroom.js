var Listingfy = require('../pageobjects/listingfy.carshowroom.page');
var data = require('../data/testdata.json');

describe ('Verification of Landing Page - Listingfy CarShowroom', () => {
    it ('To verify navigation presence', async () => {
       await Listingfy.openListingfyCarShowroom();
       await browser.pause(2000);
       await expect(Listingfy.nav_home()).toBeDisplayed();
       await expect(Listingfy.nav_home()).toBeClickable();
   }) ;
    it ('To verify Query Submission', async () => {
       await Listingfy.openListingfyCarShowroom();
       await Listingfy.submitQuery(data.listingfyCarShowroom.name_valid,data.listingfyCarShowroom.email_valid,data.listingfyCarShowroom.mobileno_valid,data.listingfyCarShowroom.message_valid,data.listingfyCarShowroom.subject_vaid,data.listingfyCarShowroom.message_valid);
       await browser.pause(2000);
       await expect(Listingfy.buttonPresent()).not.toBeDisplayed();
   });
    it ('To verify Apply job', async () => {
        await Listingfy.openListingfyCarShowroom();
        await Listingfy.verifyApplyJob();
        await expect(Listingfy.buttonPresent()).not.toBeDisplayed();
    });

});