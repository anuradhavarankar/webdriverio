import { Given,When,Then } from "@cucumber/cucumber";
import commonPage from '../pageobjects/common.page';
import homePage from '../pageobjects/home.page';

Given (/^I am on the home page$/, async ()=> {

    commonPage.openHomePage();

    await expect(homePage.btnSignIn).toBePresent();
    await expect(homePage.img_logo).toBePresent();
    await expect(homePage.link_Contact).toBePresent();

    
});


When(/^Navigate to SignUp page$/, async ()=> {

     homePage.navigateToLoginPage();
     console.log("Navigate to authentication page");
});
