import { HackerNewsPage } from './app.po';

describe('hacker-news App', function() {
  let page: HackerNewsPage;

  beforeEach(() => {
    page = new HackerNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
