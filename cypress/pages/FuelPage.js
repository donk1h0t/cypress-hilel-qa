import { BasePage } from "./BasePage";
import { GaragePage } from "./GaragePage";

export class FuelPage extends BasePage{

    addExpenseButton(){
        return cy.get(`.modal-footer > .btn-primary`)
    }
    
    emptyStateLink(){
        return cy.get(`p[class = "h3 panel-empty_message"] a`)
    }

    carDropDownButton(){
        return cy.get(`#addExpenseCar`)
    }

    datePicker(){
        return cy.get(`#addExpenseDate`)
    }

    selectMonth(){
        return cy.get(`[aria-label="Select month"]`)
    }

    selectYear(){
        return cy.get(`[aria-label="Select year"]`)
    }

    selectDay(){
        return cy.get(``)
    }

    numberOfLiters(){
        return cy.get(`#addExpenseLiters`)
    }

    milleageInput(){
        return cy.get(`#addExpenseMileage`)
    }

    totalCost(){
        return cy.get(`#addExpenseTotalCost`)
    }

    deleteExpenceButton(){
        return cy.get(`button[class = "btn btn-delete"]`)
    }

    removeExpenseButton(){
        return cy.get(`.btn-danger`)
    }
    
    editExpenseButton(){
        return cy.get(`button[class = "btn btn-edit"]`)
    }

    expensesTable(){
        return cy.get(`.expenses_table`, {timeout: 1000})
    }

}

export const fuelPage = new FuelPage