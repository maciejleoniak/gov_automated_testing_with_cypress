import ServiceTabsComponent from "../components/ServiceTabsComponent";


class TabsPage {

    CitizenTab() {
        const h2Title = 'obywatel';
        ServiceTabsComponent.expandCitizenTab();
        cy.get('body > main > section > section > h2')
            .should('include.text', h2Title);
    };

    SearchServiceTabVerification(tabSearchQuery) {
        cy.get('ul')
            .contains(tabSearchQuery);
    };

};

module.exports = new TabsPage();