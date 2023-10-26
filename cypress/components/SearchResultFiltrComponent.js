class SearchResultFiltrComponent {

    periodButtonSelector = '#custom-select-period-dropdown';
    ministryButtonSelector = '#select-ministryid-button';
    ministrySearchInputSelector = '#custom-select-ministryid-dropdown > div.dropdown-header > input';

    periodFilter() {
        cy.get(this.periodButtonSelector).click({ force: true });
        const optionLabel = "Ostatni rok";
        cy.contains('#custom-select-period-dropdown div[role="option"] label', optionLabel).click();
    };
   
    ministryFilter(ministryUnit) {
        cy.get(this.ministryButtonSelector).click();
        cy.get(this.ministrySearchInputSelector).type(ministryUnit);
        cy.contains('div[role="option"].custom-checkbox', ministryUnit).click();
    };
};

module.exports = new SearchResultFiltrComponent();