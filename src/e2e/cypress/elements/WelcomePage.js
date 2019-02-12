import Survey from './Survey';

class WelcomePage{

    visit(){
        cy.visit('/');
    }

    startSurvey(){
        const start = cy.contains('start');
        start.click();

        return new Survey();
    }
}

export default WelcomePage;