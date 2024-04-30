export class BasePage {
    
    headerLogo(){
        return cy.xpath("//a[@class='header_logo']");
    }

    footerLogo(){
        return cy.xpath("//a[@class='footer_logo']");
    }

    garageHeaderButton(){
        return cy.xpath("//nav[@class='header_nav d-flex align-items-center']/child::a[contains(text(), 'Garage')]");
    }

    FuelHeaderButton(){
        return cy.xpath("//nav[@class='header_nav d-flex align-items-center']/child::a[contains(text(), 'Fuel expenses')]");
    }

    InstructionsHeaderButton(){
        return cy.xpath("//nav[@class='header_nav d-flex align-items-center']/child::a[contains(text(), 'Instructions')]");
    }

    profileDropDownClosed(){
        return cy.get(`#userNavDropdown`);
    }

    profileDropDownOpened(){
        return cy.xpath("//div[@class='user-nav show dropdown']");
    }

    garageTabDropDown(){
        return cy.xpath("//div[@class='user-nav show dropdown']/descendant::a[contains(text(), 'Garage')]");
    }

    fuelTabDropDown(){
        return cy.xpath("//div[@class='user-nav show dropdown']/descendant::a[contains(text(), 'Fuel expenses')]");
    }

    insctructionsTabDropDown(){
        return cy.xpath("//div[@class='user-nav show dropdown']/descendant::a[contains(text(), 'Instructions')]");
    }

    profileTabDropDown(){
        return cy.xpath("//div[@class='user-nav show dropdown']/descendant::a[contains(text(), 'Profile')]");
    }

    ssettingsTabDropDown(){
        return cy.xpath("//div[@class='user-nav show dropdown']/descendant::a[contains(text(), 'Settings')]");
    }

    logoutTabDropDown(){
        return cy.xpath("//div[@class='user-nav show dropdown']/descendant::button[@class='dropdown-item btn btn-link user-nav_link']");
    }
    
    kebabGarageTab(){
        return cy.get(`nav[class = "sidebar d-flex flex-column"] [class = "icon icon-garage"]`)
    }

    kebabFuelTab(){
        return cy.get(`nav[class = "sidebar d-flex flex-column"] [class = "icon icon-fuel"]`)
    }

    kebabInstructionsTab(){
        return cy.get(`nav[class = "sidebar d-flex flex-column"] [class = "icon icon-instructions"]`)
    }

    kebabProfileTab(){
        return cy.get(`nav[class = "sidebar d-flex flex-column"] [class = "icon icon-profile"]`)
    }

    kebabSettingsTab(){
        return cy.get(`nav[class = "sidebar d-flex flex-column"] [class = "icon icon-settings"]`)
    }

    kebabLogoutButton(){
        return cy.get(`nav[class = "sidebar d-flex flex-column"] [class = "icon icon-logout"]`)
    }

}
