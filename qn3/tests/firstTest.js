// import { Builder } from "selenium-webdriver";
const {WebElement,By,Key,Builder} = require("selenium-webdriver");


async function sb_interview(){
    
    //launch the browser
    let driver = await new Builder().forBrowser("firefox").build()
    
    // let { email, pass } = require("./credentials.json");

    //Navigate to the application
    await driver.get("http://automationpractice.com/index.php")


    driver.findElement(By.className("header_user_info")).click();

    driver.findElement(By.id("email"));

    WebElement username=driver.findElement(By.id("email"));

    driver.findElement(By.id("passwd"));
    WebElement password=driver.findElement(By.id("passwd"));

    username.sendKeys("techsystems@safeboda.com");
    password.sendKeys("Safeboda123$");
    login.click();
}

sb_interview()