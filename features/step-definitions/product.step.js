import { Given, When, Then } from "@cucumber/cucumber";
import productPage from '../pageobjects/product.page';


Given (/^ I add below produacts to cart$/, async (table) =>{


    await productPage.addProducts(table);
});

Then(/^ I shall validate shopping cart as below$/, async (table) => {

    await productPage.verifyShoppingCart(table);
});

Then(/^ I shall be able to buy the product$/, async (tale) => {

    await productPage.buyProduct();
});

Then(/^ I shall be able to Buy using cheque payment$/, async (paymentType) => {

    console.log("to be added");
});

