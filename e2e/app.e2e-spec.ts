import { DojoWeatherForecastPage } from './app.po';

describe('dojo-weather-forecast App', () => {
  let page: DojoWeatherForecastPage;

  beforeEach(() => {
    page = new DojoWeatherForecastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
