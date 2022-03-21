import { Given,When,Then } from "@cucumber/cucumber";
import faker from "@faker-js/faker";
import authPage from "../pageobjects/auth.page";
import homePage from "../pageobjects/home.page";
import allureReporter from '@wdio/allure-reporter';

Then(/^create an account with random username$/, async ()=>{

    console.log("account creation");
    allureReporter.addStep("create account with random username");

    const randomStr = Math.random(). toString(36).substr(2,5);
    const emailId= 'myemail_${randomStr}@gmail.com';

    allureReporter.addSeverity("critical");

    const { faker } = require('@faker-js/faker');
    
    const addressObj = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        company: faker.company.companyName(),
        address1: faker.address.streetAddress(),
        address2: faker.random.alphaNumeric(5),
    };

    global.SharedVariable.email = emailId;
    global.SharedVariable.address = addressObj;
    await authPage.createAccount(emailId, addressObj);

});

Given(/^I am on the Sign In Page$/, async () => {

    if (await homePage.btnSignOut.isExisting()) {
        await authPage.signOut();
    }
    await expect(HomePage.btnSignIn).toBeExisting();
    await expect(HomePage.img_Logo).toBeExisting();
    await expect(HomePage.link_Contact).toBeExisting();
    
   await HomePage.navigateToLoginPage();

});

Given(/^Login using newly created credentails$/, async () =>{

    await authPage.signIn(global.SharedVariable.email);
    allureReporter.addSeverity("minor");


});

