// import { Builder } from "selenium-webdriver";
const {By,Key,Builder} = require("selenium-webdriver");


async function sb_interview(){
    
    //launch the browser
    let driver = await new Builder().forBrowser("firefox").build()
    // let browser = new swd.Builder();
    let { email, pass } = require("./credentials.json");

    //Navigate to the application
    await driver.get("http://automationpractice.com/index.php")

    // await eyes.check("Sign in", Target.window());

    driver.findElement(By.class("login")).click();
    return promiseClickSignIn;



    // let SignInBtn = await driver.findElement(By.class('login')).click();
//     let tabToOpen =
//     tab.get("http://automationpractice.com/index.php");
// tabToOpen
//     .then(function () {
  
//         // Timeout to wait if connection is slow
//         let findTimeOutP =
//             tab.manage().setTimeouts({
//                 implicit: 10000, // 10 seconds
//             });
//         return findTimeOutP;
//     })
//     .then(function () {
  
//         // Step 2 - Finding the username input
//         let promiseUsernameBox =
//             tab.findElement(swd.By.css("#login"));
//         return promiseUsernameBox;
//     })
    // .then(function (usernameBox) {
  
    //     // Step 3 - Entering the username
    //     let promiseFillUsername =
    //         usernameBox.sendKeys(email);
    //     return promiseFillUsername;
    // })
    // .then(function () {
    //     console.log(
    //         "Username entered successfully in" +
    //         "'login demonstration' for GEEKSFORGEEKS"
    //     );
  
    //     // Step 4 - Finding the password input
    //     let promisePasswordBox =
    //         tab.findElement(swd.By.css("#password"));
    //     return promisePasswordBox;
    // })
    // .then(function (passwordBox) {
  
    //     // Step 5 - Entering the password
    //     let promiseFillPassword =
    //         passwordBox.sendKeys(pass);
    //     return promiseFillPassword;
    // })
    // .then(function () {
    //     console.log(
    //         "Password entered successfully in" +
    //         " 'login demonstration' for GEEKSFORGEEKS"
    //     );
  
    //     // Step 6 - Finding the Sign In button
    //     let promiseSignInBtn = tab.findElement(
    //         swd.By.css(".btn.btn-green.signin-button")
    //     );
    //     return promiseSignInBtn;
    // })
    // .then(function (signInBtn) {
  
    //     // Step 7 - Clicking the Sign In button
    //     let promiseClickSignIn = signInBtn.click();
    //     return promiseClickSignIn;
    // })
    // .then(function () {
    //     console.log("Successfully signed in GEEKSFORGEEKS!");
    // })
    // .catch(function (err) {
    //     console.log("Error ", err, " occurred!");
    // });
    //
}

sb_interview()