class HomePage{
     
    //Webelements locators

    get btnSignIn(){
        return $(",login");
    }

    get link_Contact(){
        return $("#contact-link");
    }

    get img_logo(){
        return $(".logo.img-responsive");
    }

    //Actions

    async navigateToLoginPage(){

        await this.btnSignIn.click();
        console.log("Sign in button is clicked");

    }
}

export default new HomePage();