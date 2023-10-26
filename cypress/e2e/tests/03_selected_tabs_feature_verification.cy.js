import MainPage from '../../pages/MainPage'
import TabsPage from '../../pages/TabsPage'

describe('User should has access to selected tabs: "Dla obywatela", "Dla Przedsiębiorcy", "Dla Urzędnika", "Dla Rolnika".', () => {
    beforeEach(() => {
        MainPage.navigate();
        MainPage.acceptDefaultSettings();
    });

    it('tab:"Dla obywatela" ', () => {
        TabsPage.goToCitizenTab();
    });

    it('tab:"Dla przedsiębiorcy" ', () => {
        TabsPage.goToBusinessTab();
    });

    it('tab:"Dla urzędnika" ', () => {
        TabsPage.goToOfficialsTab();
    });

    it('tab:"Dla rolnika" ', () => {
        TabsPage.goToFarmerTab();
    });
});

