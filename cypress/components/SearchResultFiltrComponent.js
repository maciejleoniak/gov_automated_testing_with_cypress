class SearchResultFiltrComponent {

    periodButtonSelector = '#select-period-button';
    periodYearSelector = '#custom-select-period-check-1';
    ministryButtonSelector = '#select-ministryid-button';
    ministryId12Selector = '#custom-select-ministryid-opt-12';

    periodYearFiltr(){
        cy.get(this.periodButtonSelector).click();
        cy.get(this.periodYearSelector).click({ force: true });
    };

    ministryFilter(){
        cy.get(this.ministryButtonSelector).click();
        cy.get(this.ministryId12Selector).click();
    };
};

module.exports = new SearchResultFiltrComponent();