import { TestuploadPage } from './app.po';

describe('testupload App', function() {
  let page: TestuploadPage;

  beforeEach(() => {
    page = new TestuploadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
