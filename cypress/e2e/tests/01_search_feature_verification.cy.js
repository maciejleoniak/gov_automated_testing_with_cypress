import dataSearch from '../../fixtures/dataSearch.json'
import MainPage from '../../pages/MainPage'

describe('User should search for a phrase and get relevant results', () => {
    beforeEach(() => {
        MainPage.GoToWebsite();
        MainPage.CookieAccept();
    });

    it('the list of results should include the query in the results title', () => {
        const searchQuery = dataSearch.searchQuery;

        MainPage.SearchField(searchQuery);
    });
});
