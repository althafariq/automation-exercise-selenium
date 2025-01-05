const { By } = require('selenium-webdriver');
const basePage = require('./basePage');

class Header extends basePage {
  constructor(driver) {
    super(driver);
    this.authNav = By.xpath("//a[contains(.,'Signup / Login')]");
    this.homeNav = By.xpath("//a[contains(.,'Home')]");
  }

  async clickSignUp() {
    await this.clickElement(this.authNav);
  }

  async clickHome() {
    await this.clickElement(this.homeNav);
  }

}

module.exports = Header;  