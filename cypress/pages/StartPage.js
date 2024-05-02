import { BasePage } from "./BasePage";

export class StartPage extends BasePage{
    
signInButton(){
    return cy.get('.header_right > .btn');
    }

signUpButton(){
    return cy.get('.hero-descriptor_btn.btn.btn-primary')
}

logInButton(){
    return cy.get('.modal-footer > .btn-primary')
}

signUpName(){
    return cy.get('#signupName')
}

signUpLastName(){
    return cy.get('#signupLastName')
}

signUpEmail(){
    return cy.get('input[name="email"]')
}

signInEmail(){
    return cy.get('#signinEmail')
}
'#signinPassword'

signUpPassword(){
    return  cy.get('input[name="password"]')
}

signInPassword(){
    return  cy.get('#signinPassword')
}

signUpRepeatPassword(){
    return  cy.get('#signupRepeatPassword')
}

signUpSubmitButton(){
    return cy.get('button[class="btn btn-primary"]')
}

createAccount(user){
    this.signUpButton().click();
    this.signUpName().type(user.name);
    this.signUpLastName().type(user.lastName);
    this.signUpEmail().type(user.email);
    this.signUpPassword().type(user.password);
    this.signUpRepeatPassword().type(user.password);
    this.signUpSubmitButton().click();
}

validateRegistration(user){
    cy.contains('Registration complete').should('exist');
    cy.url().should('eq', 'https://qauto2.forstudy.space/panel/garage')
    this.profileDropDownClosed().click();
    this.profileTabDropDown().click();  
    cy.contains(user.name).should('exist');
    this.kebabLogoutButton().click();
}
}

export const startPage = new StartPage