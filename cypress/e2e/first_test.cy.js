/// <reference types="cypress" />
function generateRandomNumber() {
  return Math.floor(Math.random()*1000);
}

const randomNumber = generateRandomNumber();
console.log(randomNumber);


describe('Регистрация на странице и переход на следующую страницу', () => {
    it('Регистрация и переход', () => {
      // Переходим на страницу регистрации
      cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
  
      // Заполняем форму регистрации
      cy.get('.hero-descriptor_btn.btn.btn-primary').click();
      cy.get('#signupName').type('Oleksii');
      cy.get('#signupLastName').type('Yevdokymov');
      cy.get('input[name="email"]').type('example' + randomNumber+ '@example.com');
      cy.get('input[name="password"]').type('Password123');
      cy.get('#signupRepeatPassword').type('Password123');
      cy.get('button[class="btn btn-primary"]').click();
      cy.get('.btn.btn-white.btn-sidebar.sidebar_btn.-profile').click();
      
      // Отправляем форму
      //cy.get('form').submit();
  
      // Проверяем, что переход произошел на следующую страницу
      //cy.url().should('include', '/next_page');
      cy.contains('Garage').should('exist');
      cy.contains('Oleksii').should('exist');
    });
  });
  