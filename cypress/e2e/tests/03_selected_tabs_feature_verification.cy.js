import MainPage from '../../pages/MainPage'
import TabsPage from '../../pages/TabsPage'

describe('User should has access to selected tabs: "Dla obywatela", "Dla Przedsiębiorcy", "Dla Urzędnika", "Dla Rolnika".', () => {
    beforeEach(() => {
        MainPage.GoToWebsite();
        MainPage.CookieAccept();
    });
    
    it('tab:"Dla obywatela"  ', () => {
        TabsPage.CitizenTab();
    });

});

