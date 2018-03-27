import { AppPage } from './app.po';

describe('angular-esri-examples App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Angular ESRI Examples');
  });
});
