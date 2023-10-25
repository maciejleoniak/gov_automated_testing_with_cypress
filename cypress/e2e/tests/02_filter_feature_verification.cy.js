import dataSearch from '../../fixtures/dataSearch.json'
import MainPage from '../../pages/MainPage'

describe('User should be able to filter search results: period of time, ministry unit.', () => {
    beforeEach(() => {
        MainPage.GoToWebsite();
        MainPage.CookieAccept();
    });

    it('period of time - example: "Period: ostatni rok" ', () => {
        const searchQuery = dataSearch.searchQuery;

        MainPage.SearchField(searchQuery);
        MainPage.PeriodFiltrSearchResult();
    });

    it('ministry unit - example: "Biuletyn Informacji Publicznej" ', () => {
        const searchQuery = dataSearch.searchQuery;

        MainPage.SearchField(searchQuery);
        MainPage.MinistryFiltrSearchResult();
    });
});