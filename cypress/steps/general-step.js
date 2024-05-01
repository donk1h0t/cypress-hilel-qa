import { startPage } from "../pages/StartPage"


export class GeneralStep{

    login(user){
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/')
        startPage.signInButton().click();
        startPage.signInEmail().type(user.email);
        startPage.signInPassword().type(user.password);
        startPage.logInButton().click();
    }

    
}

export const generalStep = new GeneralStep