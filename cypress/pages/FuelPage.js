import { BasePage } from "./BasePage";
import { GaragePage } from "./GaragePage";

export class FuelPage extends BasePage{

    addExpenseButton(){
        return cy.get(`div[class = "panel-page"] button[class = "btn btn-primary" ]`)
    }
    
    emptyStateLink(){
        return cy.get(`p[class = "h3 panel-empty_message"] a`)
    }

    carDropDownButton(){
        return cy.get(`#carSelectDropdown`)
    }

    chooseCarFromDropDown(number){
        return cy.get(`div[class = "car-select-dropdown show dropdown"] li:nth-child(${number})`)
    }

    numberOfLiters(){
        return cy.xpath(`//input[@name='liters']`)
    }

    totalCost(){
        return cy.xpath(`//input[@name='totalCost']`)
    }

    deleteExpenceButton(){
        return cy.get(`button[class = "btn btn-delete"]`)
    }

    editExpenseButton(){
        return cy.get(`button[class = "btn btn-edit"]`)
    }

}