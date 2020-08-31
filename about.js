import { Builder, Key, By, until } from 'selenium-webdriver';
import { equal, strictEqual } from 'assert';
import { describe, it, before, after } from 'mocha';


describe('About page', function () {
    let driver;
    before(async () => {
        driver = await new Builder().forBrowser('chrome', '84.0.4147.135').build();
        await driver.get('https://nextjs-example-ejz8cohei.vercel.app/about');
    })

    it('shoud have browser title "About Us"', async () => {
        const title = await driver.getTitle();
        equal(title, 'About Us');
    })
    
    it('should have body title "About Us"', async () => {
        const element = await driver.findElement(By.className('Home_title__3DjR7'));
        strictEqual(await element.getText(), 'About Us');
    })

    it('should have body description "This is about the tesing of the website using Selenium."', async () => {
        const element = await driver.findElement(By.className('Home_description__17Z4F'));
        strictEqual(await element.getText(), 'This is about the tesing of the website using Selenium.');
    })

    it('should direct to "https://samp-nextjs.vercel.app/login" when clicked on nav bar login"', async () => {
        const element = await driver.findElement(By.linkText("Login"));
        await element.click();
        driver.sleep(1000);
        const title = await driver.getTitle()
        equal(title,"Login");
    })

    after(() => {
        driver && driver.quit();
    })
});


