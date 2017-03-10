import { CommentsUIPage } from './app.po';

describe('comments-ui App', () => {
  let page: CommentsUIPage;

  beforeEach(() => {
    page = new CommentsUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
