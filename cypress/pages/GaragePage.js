import { BasePage } from "./BasePage"

export class GaragePage extends BasePage{

    addCarButton(){
        return cy.xpath("//button[@class='btn btn-primary'][contains(text(), 'Add car')]")
    }
    
    selectCarOption(car){
        return cy.xpath(`//select[@id="addCarBrand"]/child::option[contains(text(), '${car}')]`)
    }

    selectCarModelOption(model){
        return cy.xpath(`//select[@id="addCarModel"]/child::option[contains(text(), '${model}')])`)
    }

    milleageInput(){
        return cy.xpath(`//input[@name='mileage']`)
    }

    reportDate(){
        return cy.xpath(`//input[@name='reportedAt']`)
    }

    addCarButton(){
        return cy.get(`div[class = "modal-footer_group"] button[class = "btn btn-primary"]`)
    }

    cancelCarAdding(){
        return cy.get(`button[class="btn btn-secondary"]`)
    }

    removeCarButton(){
        return cy.get(`button[class="btn btn-outline-danger"]`)
    }

    updateMilleageField(){
        return cy.get(`input[type="number"]`)
    }

    submitUpdateMilleageButton(){
        return cy.get(`button[type="submit"]`)
    }

    milleageUpdatedMessage(){
        cy.contains('Milleage updated').should('exist')
    }

    editCarButton(){
        return cy.get(`button[class="car_edit btn btn-edit"]`)
    }

    removeCarButton(){
        return cy.get(`button[class = "btn btn-danger"]`)
    }



}