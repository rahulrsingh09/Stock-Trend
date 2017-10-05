import { SokcetsPage } from './app.po';

describe('sokcets App', () => {
  let page: SokcetsPage;

  beforeEach(() => {
    page = new SokcetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
