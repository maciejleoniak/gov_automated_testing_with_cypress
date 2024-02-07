class SearchFieldComponent {

    searchFieldSelector = '#query';
    searchButtonSelector ='button[type="submit"]';

    SearchBar(searchQuery) {
        cy.get(this.searchFieldSelector)
            .clear()
            .type(searchQuery);
        cy.get(this.searchButtonSelector)
            .click();
    };
};

module.exports = new SearchFieldComponent();