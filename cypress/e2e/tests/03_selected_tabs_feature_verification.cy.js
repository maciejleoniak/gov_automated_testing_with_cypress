import MainPage from '../../pages/MainPage'
import TabsPage from '../../pages/TabsPage'

describe('User should has access to selected tabs: "Dla obywatela", "Dla Przedsiębiorcy", "Dla Urzędnika", "Dla Rolnika".', () => {
    beforeEach(() => {
        MainPage.navigate();
        MainPage.acceptDefaultSettings();
    });

    it('tab:"Dla obywatela" ', () => {
        TabsPage.goToCitizenTab();
        TabsPage.verifyCitizenTabNavigation();
    });

    it('tab:"Dla przedsiębiorcy" ', () => {
        TabsPage.goToBusinessTab();
        TabsPage.verifyBusinessTabNavigation()
    });

    it('tab:"Dla urzędnika" ', () => {
        TabsPage.goToOfficialsTab();
        TabsPage.verifyOfficialsTabNavigation();
    });

    it('tab:"Dla rolnika" ', () => {
        TabsPage.goToFarmerTab();
        TabsPage.verifyFarmerTabNavigation();
    });
});

