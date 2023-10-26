class SearchFieldComponent {

    searchFieldSelector = '#query';
    searchButtonSelector = 'body > main > div:nth-child(1) > section.gov-services.blue-bar-row.blue-bar-row--epolak > div > div > div.blue-bar-content > form > button';

    SearchBar(searchQuery) {
        cy.get(this.searchFieldSelector)
            .clear()
            .type(searchQuery);
        cy.get(this.searchButtonSelector)
            .click();
    };
};

module.exports = new SearchFieldComponent();