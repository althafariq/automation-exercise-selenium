const { By } = require('selenium-webdriver');
const config = require('../configs/config');

class DashboardPage {
  constructor(driver) {
    this.driver = driver;
  }

  async ValidateHomePage() {
    let title = await this.driver.findElement(By.xpath("//div[@id='slider-carousel']//div[@class='item active']//h1[.='AutomationExercise']"));
    return await title.isDisplayed();
  }
}

