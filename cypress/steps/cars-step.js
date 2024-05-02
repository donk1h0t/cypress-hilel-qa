import { GeneralStep } from "./general-step";
import { GaragePage, garagePage } from "../pages/GaragePage";

export class CarsStep extends GeneralStep{

    addCar(car){
        GaragePage.addCarButton.click();
        GaragePage.selectCarOption.select(car.car);
        GaragePage.selectCarModelOption.select(car.model);
        GaragePage.milleageInput.type(car.mileage);
        GaragePage.addCarButtonInModal.click();
    }

    checkCarAdded(car){
        GaragePage.carName.should('have.text', `${car.car} ${car.model}`)
    }

    deleteCar(){
        GaragePage.editCarButton.first().click()
        GaragePage.removeCarButton.click();
        GaragePage.removeCarButtonLast.click();
        
        }

    checkThatCarDeleted(car2){
        //cy.contains('You don’t have any cars in your garage').should('exist')
        GaragePage.carName.first().should('not.have.text', `${car2.car} ${car2.model}`)
    }

    editAnyCarFromTheList(){
        this.chooseAnyCarFromGarage().then(n => {
            garagePage.exactCarInTheList(n).click();
        });
        
    };

    addExpenseToAnyCar(){
        this.chooseAnyCarFromGarage().then(n => {
            garagePage.ExpenseAnyCarInTheList(n).click();
        });
    }
    
    chooseAnyCarFromGarage() {
        return GaragePage.carList.its('length').then(length => {
            let numberOfCars = length;
            let n = Math.floor(Math.random() * length) + 1;
            return n;
        });
    }
    
    
}
export const carsStep = new CarsStep

