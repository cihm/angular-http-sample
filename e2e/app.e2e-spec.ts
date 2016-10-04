import { AngularHttpSamplePage } from './app.po';

describe('angular-http-sample App', function() {
  let page: AngularHttpSamplePage;

  beforeEach(() => {
    page = new AngularHttpSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
