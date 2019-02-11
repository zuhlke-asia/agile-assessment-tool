import Survey from './Survey';

class WelcomePage{

    visit(){
        cy.visit('/');
    }

    startSurvey(){
        const start = cy.contains('start');
        start.click();

        const survey = new Survey(4);
        return survey;
    }
}

export default WelcomePage;