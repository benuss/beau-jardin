import { BeauJardinPage } from './app.po';

describe('beau-jardin App', () => {
  let page: BeauJardinPage;

  beforeEach(() => {
    page = new BeauJardinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
