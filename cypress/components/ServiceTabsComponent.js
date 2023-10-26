class ServiceTabsComponent {

    citizensTabSelector = '#citizens-tab';
    expandCitizenTabSelector = 'a.see-more-button.btn.btn-secondary[href="/web/gov/uslugi-dla-obywatela"]';
    businessTabSelector = '#business-tab';
    expandBusinessTabSelector = 'a.see-more-button.btn.btn-secondary[href="/web/gov/uslugi-dla-przedsiebiorcy"]';
    officialsTabSelector = '#officials-tab';
    expandOfficialsTabSelector = 'a.see-more-button.btn.btn-secondary[href="/web/gov/uslugi-dla-urzednika"]';
    farmerTabSelector = '#farmer-tab'
    expandFarmerTabSelector = 'a.see-more-button.btn.btn-secondary[href="/web/gov/uslugi-dla-rolnika"]'
    serviceSearchFieldSelector = '#services-search-input';

    expandCitizenTab() {
        cy.get(this.citizensTabSelector).click();
        cy.get(this.expandCitizenTabSelector).click();
    };

    expandBusinessTab() {
        cy.get(this.businessTabSelector).click();
        cy.get(this.expandBusinessTabSelector).click();
    };

    expandOfficialsTab() {
        cy.get(this.officialsTabSelector).click();
        cy.get(this.expandOfficialsTabSelector).click();
    };

    expandFarmerTab() {
        cy.get(this.farmerTabSelector).click();
        cy.get(this.expandFarmerTabSelector).click();
    };

    serviceSearchField(tabSearchQuery) {
        cy.get(this.serviceSearchFieldSelector)
            .click()
            .type(tabSearchQuery);
    };
};

module.exports = new ServiceTabsComponent();

