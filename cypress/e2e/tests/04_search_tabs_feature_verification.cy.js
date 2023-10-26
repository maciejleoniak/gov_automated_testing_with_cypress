import dataSearch from '../../fixtures/dataSearch.json'
import MainPage from '../../pages/MainPage'
import TabsPage from '../../pages/TabsPage'

describe('User should be able to check special information by a search query', () => {
    beforeEach(() => {
        MainPage.navigate();
        MainPage.acceptDefaultSettings();
    });

    it('tab:"Dla obywatela" query: Mandat', () => {
        const tabSearchQuery = dataSearch.tabSearchQuery;

        TabsPage.goToCitizenTab();
        TabsPage.SearchServiceTabVerification(tabSearchQuery);
    });
});