import Survey from './Survey';

class WelcomePage{

    visit(){
        cy.visit('/');
    }

    startSurvey(){
        const start = cy.contains('Start');
        start.click();

        return new Survey(5);
    }
}

export default WelcomePage;