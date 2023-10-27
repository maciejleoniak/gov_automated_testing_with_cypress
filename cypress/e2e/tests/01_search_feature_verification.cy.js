import dataSearch from '../../fixtures/dataSearch.json'
import MainPage from '../../pages/MainPage'

describe('User should search for a phrase and get relevant results', () => {
    beforeEach(() => {
        MainPage.navigate();
        MainPage.acceptDefaultSettings();
    });

    it('the list of results should include the query in the results title', () => {
        const searchQuery = dataSearch.searchQuery;

        MainPage.searchFor(searchQuery);
        MainPage.verifySearchResultContentContains(searchQuery);
        MainPage.verifySearchResultItemsQuantity();
    });

    it('if there is no record for query, the search shows 0 results ', () => {
        const noResults = dataSearch.noResults;

        MainPage.searchForInvalid(noResults);
        MainPage.verifySearchCompletedWithNoResult();
    });
});
