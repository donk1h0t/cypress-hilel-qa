import { GeneralStep } from "./general-step";
import { fuelPage } from "../pages/FuelPage";

export class Fuelstep extends GeneralStep{

    addFuelExpence(car){
        fuelPage.carDropDownButton().select(`${car.car} ${car.model}`);
        fuelPage.datePicker().clear().type('1.05.2024');
        fuelPage.milleageInput().clear().type('120');
        fuelPage.numberOfLiters().type('5');
        fuelPage.totalCost().type('10');
        fuelPage.addExpenseButton().click();
    
    }

    checkCarAddedExpense(){
        cy.contains('Fuel expense added').should('exist')
        fuelPage.expensesTable().should('exist')
    }

    deleteExpense(){
        fuelPage.deleteExpenceButton().invoke('css', 'visibility', 'visible').click();;
        fuelPage.removeExpenseButton().click();
    }

    checkThatExpenseDeleted(){
        cy.contains('Fuel expense entry removed').should('exist')
        fuelPage.expensesTable().should('not.exist')
    }
}

export const fuelStep = new Fuelstep

