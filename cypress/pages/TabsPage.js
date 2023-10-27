import ServiceTabsHandler from "../components/ServiceTabsComponent";


class TabsPage {

    tabTitle = 'body > main > section > section > h2';
    tabRouteTitle = '#main-content > div > h2';

    goToCitizenTab() {
        ServiceTabsHandler.expandCitizenTab();
    };

    verifyCitizenTabNavigation() {
        const h2Title = 'obywatel';
        cy.get(this.tabTitle)
            .should('include.text', h2Title);
    };

    goToBusinessTab() {
        ServiceTabsHandler.expandBusinessTab();
    };

    verifyBusinessTabNavigation() {
        const h2Title = 'przedsiębiorcy';
        cy.get(this.tabTitle)
            .should('include.text', h2Title);
    };

    goToOfficialsTab() {
        ServiceTabsHandler.expandOfficialsTab();
    };

    verifyOfficialsTabNavigation() {
        const h2Title = 'urzędnik';
        cy.get(this.tabTitle)
            .should('include.text', h2Title);
    };

    goToFarmerTab() {
        ServiceTabsHandler.expandFarmerTab();
    };

    verifyFarmerTabNavigation() {
        const h2Title = 'rolnik';
        cy.get(this.tabTitle)
            .should('include.text', h2Title);
    };

    searchTabFor(tabSearchQuery) {
        ServiceTabsHandler.serviceSearchField(tabSearchQuery);
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