class ServiceTabsHandler {

    citizensTabSelector = '#citizens-tab';
    expandTabSelector = 'a.see-more-button.btn.btn-secondary[href="/web/gov/uslugi-dla-';
    CitizenSelector = 'obywatela"]';
    businessTabSelector = '#business-tab';
    BusinessSelector = 'przedsiebiorcy"]';
    officialsTabSelector = '#officials-tab';
    OfficialsSelector = 'urzednika"]';
    farmerTabSelector = '#farmer-tab'
    FarmerSelector = 'rolnika"]'
    serviceSearchFieldSelector = '#services-search-input';

    expandCitizenTab() {
        cy.get(this.citizensTabSelector).click();
        cy.get(`${this.expandTabSelector}${this.CitizenSelector}`).click();
    };

    expandBusinessTab() {
        cy.get(this.businessTabSelector).click();
        cy.get(`${this.expandTabSelector}${this.BusinessSelector}`).click();
    };

    expandOfficialsTab() {
        cy.get(this.officialsTabSelector).click();
        cy.get(`${this.expandTabSelector}${this.OfficialsSelector}`).click();
    };

    expandFarmerTab() {
        cy.get(this.farmerTabSelector).click();
        cy.get(`${this.expandTabSelector}${this.FarmerSelector}`).click();
    };

    serviceSearchField(tabSearchQuery) {
        cy.get(this.serviceSearchFieldSelector)
            .click()
            .type(tabSearchQuery);
    };
};

module.exports = new ServiceTabsHandler();

