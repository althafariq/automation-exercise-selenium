const { Builder } = require('selenium-webdriver');
const register = require('../pages/register');
const config = require('../configs/config');
const assert = require('assert');
const getDriver = require('../configs/webDriver');

describe('Test Case 1: Register User', () => {
  let driver;
  this.timeout(config.timeout);

  before (async () => {
    driver = await getDriver(config.browser);
  });

  it('Verify home page is visible', async () => {
    
  });

  after (async () => {
    await driver.quit();
  });
});