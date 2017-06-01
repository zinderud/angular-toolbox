import { AngularToolboxPage } from './app.po';

describe('angular-toolbox App', () => {
  let page: AngularToolboxPage;

  beforeEach(() => {
    page = new AngularToolboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
