import { BasePage } from "./BasePage"

export class GaragePage extends BasePage{

    static get addCarButton(){
        return cy.get(`.panel-page_heading > .btn`, {timeout: 10000})
    }
    
    static get selectCarOption(){
        return cy.get(`#addCarBrand`)
    }

    static get selectCarModelOption(){
        return cy.get(`#addCarModel`)
    }

    static get milleageInput(){
        return cy.get(`#addCarMileage`)
    }

    reportDate(){
        return cy.xpath(`//input[@name='reportedAt']`)
    }

    static get addCarButtonInModal(){
        return cy.get(`.modal-footer > .btn-primary`)
    }

    cancelCarAdding(){
        return cy.get(`button[class="btn btn-secondary"]`)
    }

    static get removeCarButtonLast(){
        return cy.get(`.btn-danger`)
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

    static get editCarButton(){
        return cy.get(`.car_edit > .icon`)
    }

    static get removeCarButton(){
        return cy.get(`.btn-outline-danger`)
    }

    static get carName(){
        return cy.get(`.car_name`, {timeout: 1000}).first()
    }

    static get carList(){
        return cy.get(`.car-list .car-item`, {timeout:1000})
    }

    exactCarInTheList(n){
        return cy.get(`.car-list .car-item:nth-child(${n}) .car_edit`)
    }

    ExpenseAnyCarInTheList(n){
        return cy.get(`.car-list .car-item:nth-child(${n}) .car_add-expense`)
    }

}

export const garagePage = new GaragePage