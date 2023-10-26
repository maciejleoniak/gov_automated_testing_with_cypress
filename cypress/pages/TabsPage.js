import ServiceTabsComponent from "../components/ServiceTabsComponent";


class TabsPage {

    goToCitizenTab() {
        const h2Title = 'obywatel';
        ServiceTabsComponent.expandCitizenTab();
        cy.get('body > main > section > section > h2')
            .should('include.text', h2Title);
    };

    goToBusinessTab() {
        const h2Title = 'przedsiębiorcy';
        ServiceTabsComponent.expandBusinessTab();
        cy.get('body > main > section > section > h2')
            .should('include.text', h2Title);
    };

    goToOfficialsTab() {
        const h2Title = 'urzędnik';
        ServiceTabsComponent.expandOfficialsTab();
        cy.get('body > main > section > section > h2')
            .should('include.text', h2Title);
    };

    goToFarmerTab() {
        const h2Title = 'rolnik';
        ServiceTabsComponent.expandFarmerTab();
        cy.get('body > main > section > section > h2')
            .should('include.text', h2Title);
    };

    SearchServiceTabVerification(tabSearchQuery) {
        cy.get('ul')
            .contains(tabSearchQuery);
    };

};

module.exports = new TabsPage();