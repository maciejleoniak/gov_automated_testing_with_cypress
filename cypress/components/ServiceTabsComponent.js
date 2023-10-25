class ServiceTabsComponent {

    citizensTabSelector = '#citizens-tab';
    expandCitizenTabSelector = 'a.see-more-button.btn.btn-secondary[href="/web/gov/uslugi-dla-obywatela"]';
    serviceSearchFieldSelector = '#services-search-input';

    expandCitizenTab() {
        cy.get(this.citizensTabSelector).click();
        cy.get(this.expandCitizenTabSelector).click();
    };

    serviceSearchField(tabSearchQuery) {
        cy.get(this.serviceSearchFieldSelector)
            .click()
            .type(tabSearchQuery);
    };

};

module.exports = new ServiceTabsComponent();

