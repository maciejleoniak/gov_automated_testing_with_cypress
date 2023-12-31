import dataSearch from '../../fixtures/dataSearch.json'
import MainPage from '../../pages/MainPage'

describe('User should be able to filter search results: period of time, ministry unit.', () => {
    beforeEach(() => {
        MainPage.navigate();
        MainPage.acceptDefaultSettings();
    });

    it('period of time - example: "Period: ostatni rok" ', () => {
        const searchQuery = dataSearch.searchQuery;
       
        MainPage.searchFor(searchQuery);
        MainPage.filterSearchResultByPeriod();
        MainPage.verifySearchResultItemsQuantity();
    });

    it('ministry unit - example: "Biuletyn Informacji Publicznej" ', () => {
        const searchQuery = dataSearch.searchQuery;
        const ministryUnit = dataSearch.ministryUnit;

        MainPage.searchFor(searchQuery);
        MainPage.filterSearchResultByMinistry(ministryUnit);
        MainPage.verifySearchResultItemsQuantity();
    });
});

