var LoginPage = require('../pageobjects/login.page');
var data = require('../data/testdata.json');
const { isLogoPresent, isAboutNavPresent, isContacttNavPresent, isGalleryNavPresent } = require('../pageobjects/login.page');

describe('Verification of Landing Page - Furnogamy', ()=>{

    it('To verify page title', async ()=>{
        await LoginPage.openFurnogamySite();
        await expect(browser).toHaveTitle(data.furnogamy.browsertitle);       
    });

    it('To verify logo exist on page', async ()=> {
        await LoginPage.openFurnogamySite();
        await expect(isLogoPresent()).toBeTruthy();
    });

    it('To verify navigation links', async()=>{
        await LoginPage.openFurnogamySite();
        await expect(isAboutNavPresent()).toExist();
        await expect(isContacttNavPresent()).toExist();
        await expect(isGalleryNavPresent()).toExist();
    });

    it('To verify Page landing for About Navigation', async()=> {
        await LoginPage.openFurnogamySite();
        await isAboutNavPresent().click();
        await expect(browser).toHaveUrl(data.furnogamy.aboutpageurl);
       // await expect($('data.txt_abouttitle')).toBeDisplayed();
    });

    it('To verify meta elements on landing page', async()=> {
        await LoginPage.openFurnogamySite();
      console.log(await $('//meta[@name="description"]').getAttribute("content"));
    });

});


