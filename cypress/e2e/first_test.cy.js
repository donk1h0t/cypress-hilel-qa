import { BasePage } from "../pages/BasePage";
import { StartPage } from "../pages/StartPage";
const firstName = 'Alex'
const lastName = 'Yevdokymov'
const password = 'Password123'

function generateRandomNumber(){
   return Math.floor(Math.random()*1000);
}

function mail(){
  const randomNumber = generateRandomNumber()
  return 'example' + randomNumber+ '@example.com'
}

let user = {
  name: firstName,
  lastName: lastName,
  email: mail,
  password: password
};

const startPage = new StartPage


describe('Регистрация на странице и переход на следующую страницу', () => {
    it('Регистрация и переход', () => {
      cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
      startPage.createAccount(user);
      startPage.validateRegistration(user);
    });
  });
