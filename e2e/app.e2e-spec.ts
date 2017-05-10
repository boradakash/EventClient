import { EventApplicationPage } from './app.po';

describe('event-application App', () => {
  let page: EventApplicationPage;

  beforeEach(() => {
    page = new EventApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
