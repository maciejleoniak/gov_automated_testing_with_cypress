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

    filterSearchResultByLastYear() {
        SearchResultFiltrComponent.periodYearFilter();
        cy.wait(1000);
    };

    filterSearchResultByMinistry() {
        SearchResultFiltrComponent.ministryFilter();
        cy.wait(1000);
    };

    SearchResultContentVerification(searchQuery) {
        cy.get(this.searchResultContentSelector)
            .should('include.text', searchQuery);
    };

    SearchResultQuantityVerification() {
        cy.get(this.searchResultCounterSelector)
            .invoke('text')
            .then(searchCounter => {
                const parts = searchCounter.split(':');
                const numberPart = parts[1];
                const number = parseInt(numberPart);
                expect(number).to.be.greaterThan(0);
            });
    };

    SearchNoResultQuantityVerification() {
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