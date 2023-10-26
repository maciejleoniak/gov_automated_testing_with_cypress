import ServiceTabsComponent from "../components/ServiceTabsComponent";


class TabsPage {

    tabTitle = 'body > main > section > section > h2';
    tabRouteTitle = '#main-content > div > h2';

    goToCitizenTab() {
        const h2Title = 'obywatel';
        ServiceTabsComponent.expandCitizenTab();
        cy.get(this.tabTitle)
            .should('include.text', h2Title);
    };

    goToBusinessTab() {
        const h2Title = 'przedsiębiorcy';
        ServiceTabsComponent.expandBusinessTab();
        cy.get(this.tabTitle)
            .should('include.text', h2Title);
    };

    goToOfficialsTab() {
        const h2Title = 'urzędnik';
        ServiceTabsComponent.expandOfficialsTab();
        cy.get(this.tabTitle)
            .should('include.text', h2Title);
    };

    goToFarmerTab() {
        const h2Title = 'rolnik';
        ServiceTabsComponent.expandFarmerTab();
        cy.get(this.tabTitle)
            .should('include.text', h2Title);
    };

    searchTabFor(tabSearchQuery) {
        ServiceTabsComponent.serviceSearchField(tabSearchQuery);
        cy.wait(1000);
    };

    tabRoute(tabSearchQuery) {
        cy.contains('a', tabSearchQuery).first().click({ force: true });
    };

    isSearchResultTabHaveProperContent(tabSearchQuery) {
        cy.get(this.tabRouteTitle).contains(tabSearchQuery);
    };
};

module.exports = new TabsPage();