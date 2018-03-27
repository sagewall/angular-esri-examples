import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    browser.waitForAngularEnabled(false);
    return element(by.css('app-root h1')).getText();
  }
}
