import SearchFieldComponent from "../components/SearchFieldComponent";
import SearchResultFiltrComponent from "../components/SearchResultFiltrComponent";

class MainPage {

    host = 'https://www.gov.pl/';
    cookiesSettingsSelector = '#cookies-info button';
    searchResultContentSelector = '.search-results';
    searchResultCounterSelector = '.search__counter';

    navigate() {
        cy.clearCookies();
        cy.visit(this.host);
    };

    acceptDefaultSettings() {
        cy.get(this.cookiesSettingsSelector).click();
    };

    searchFor(searchQuery) {
        SearchFieldComponent.SearchBar(searchQuery);
        cy.wait(1000);
    };

    searchForInvalid(noResults) {
        SearchFieldComponent.SearchBar(noResults);
        cy.wait(1000);
    };

    filterSearchResultByPeriod() {
        SearchResultFiltrComponent.periodFilter();
        cy.wait(1000);
    };

    filterSearchResultByMinistry(ministryUnit) {
        SearchResultFiltrComponent.ministryFilter(ministryUnit);
        cy.wait(1000);
    };

    verifySearchResultContentContains(searchQuery) {
        cy.get(this.searchResultContentSelector)
            .should('include.text', searchQuery);
    };

    verifySearchResultItemsQuantity() {
        cy.get(this.searchResultCounterSelector)
            .invoke('text')
            .then(searchCounter => {
                const parts = searchCounter.split(':');
                const numberPart = parts[1];
                const number = parseInt(numberPart);
                expect(number).to.be.greaterThan(0);
            });
    };

    verifySearchCompletedWithNoResult() {
        cy.get(this.searchResultCounterSelector)
            .invoke('text')
            .then(searchCounter => {
                const parts = searchCounter.split(':');
                const numberPart = parts[1];
                const number = parseInt(numberPart);
                expect(number).to.be.oneOf([undefined, 0])
            });
    };
};

module.exports = new MainPage();