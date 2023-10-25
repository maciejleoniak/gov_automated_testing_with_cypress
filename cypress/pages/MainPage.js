import SearchFieldComponent from "../components/SearchFieldComponent";
import SearchResultFiltrComponent from "../components/SearchResultFiltrComponent";

class MainPage {

    host = 'https://www.gov.pl/';
    cookiesSettingsSelector = '#cookies-info button';


    GoToWebsite() {
        cy.clearCookies();
        cy.visit(this.host);
    };

    CookieAccept() {
        cy.get(this.cookiesSettingsSelector).click();
    };

    SearchField(searchQuery) {
        SearchFieldComponent.SearchBar(searchQuery);
        SearchFieldComponent.SearchResultContentVerification(searchQuery);
        SearchFieldComponent.SearchResultQuantityVerification();
    };

    PeriodFiltrSearchResult() {
        SearchResultFiltrComponent.periodYearFiltr();
        SearchFieldComponent.SearchResultQuantityVerification();
    };

    MinistryFiltrSearchResult() {
        SearchResultFiltrComponent.ministryFilter();
        SearchFieldComponent.SearchResultQuantityVerification();
    };

};

module.exports = new MainPage();