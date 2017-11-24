import { M3pPage } from './app.po';

describe('m3p App', () => {
  let page: M3pPage;

  beforeEach(() => {
    page = new M3pPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
