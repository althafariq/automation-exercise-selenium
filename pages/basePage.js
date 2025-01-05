const { By } = require('selenium-webdriver');

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async navigate(url) {
    await this.driver.get(config.baseUrl);
  }

  async findElement(locator) {
    return await this.driver.findElement(locator);
  }

  async clickElement(locator) {
    await this.findElement(locator).click();
  }

  async sendKeys(locator, text) {
    await this.findElement(locator).sendKeys(text);
  }

  async getText(locator) {
    return await this.findElement(locator).getText();
  }
}

module.exports = BasePage;