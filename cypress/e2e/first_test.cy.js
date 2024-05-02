import { garagePage } from "../pages/GaragePage";
import { startPage } from "../pages/StartPage";
import { generalStep } from "../steps/general-step";
import { carsStep } from "../steps/cars-step";
import { fuelStep } from "../steps/fuel-step";
//import { UserData } from "../data/user_data";


function generateRandomNumber(){
   return Math.floor(Math.random()*10000);
}

function mail(){
  const randomNumber = generateRandomNumber()
  return 'example' + randomNumber+ '@example.com'
}

var email = mail()

let user = {
  name: 'Alex',
  lastName: 'Yevdokymov',
  email: email,
  password: 'Password123'
  };

let car = {
  car: 'Ford',
  model: 'Fusion',
  mileage: '100',
}

let car2 = {
  car: 'Audi',
  model: 'TT',
  mileage: '100',
}

let car3 = {
  car: 'Fiat',
  model: 'Ducato',
  mileage: '100',
}

describe('Регистрация на странице и переход на следующую страницу', () => {
  before(() =>{
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    startPage.createAccount(user);
    startPage.validateRegistration(user);
  })

  beforeEach(() =>{
    generalStep.login(user)
  })

  it('Додавання двох машин', () => {
    carsStep.addCar(car);
    carsStep.checkCarAdded(car);
    carsStep.addCar(car2);
    carsStep.checkCarAdded(car2);
  });

  it('Видалення першої машини', () => {
    carsStep.deleteCar();
    carsStep.checkThatCarDeleted(car2);
  });

  it('Додавання expense', () => {
    carsStep.addExpenseToAnyCar();
    fuelStep.addFuelExpence(car);
    fuelStep.checkCarAddedExpense();
  });

  it('Видалення expense', () => {
    startPage.fuelTabDropDown().click();
    fuelStep.deleteExpense();
    fuelStep.checkThatExpenseDeleted();
    });
  });
