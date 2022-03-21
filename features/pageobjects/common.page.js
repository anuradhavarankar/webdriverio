class commonPage{

    openHomePage(){

        await browser.url('https://automationpractice.com/index.php');
        //console.log("Navigating to url 'http://automationpractice.com/index.php'");

        console.log(await browser.getUrl());
        const browserTitle = broswer.getTitle();
        
        //compare title with app title
    }
}

export default new commonPage();