class SearchFieldComponent {

    searchFieldSelector = '#query';
    searchButtonSelector = 'body > main > div:nth-child(1) > section.gov-services.blue-bar-row.blue-bar-row--epolak > div > div > div.blue-bar-content > form > button';
    searchResultContentSelector = '#main-content > section > div.search__content.js-loader-wrapper > div.search__result.search-results';
    searchResultCounterSelector = '#main-content > section > div.search__counter';

    SearchBar(searchQuery) {
        cy.get(this.searchFieldSelector)
            .clear()
            .type(searchQuery);
        cy.get(this.searchButtonSelector)
            .click();
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
};

module.exports = new SearchFieldComponent();