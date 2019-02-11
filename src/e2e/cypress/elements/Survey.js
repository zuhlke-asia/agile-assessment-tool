import PageAnwsers from './PageAnswers';

class Survey {

    constructor(numberOfPages) {
        this.numberOfpages = numberOfPages;
        this.currentPageNumber = 1;
    }

    fillAllAnswers() {
        PageAnwsers[this.currentPageNumber].fillAnswers();
    }

    goToNextPage() {
        cy.get('input[value="Next"]').click();
        this.currentPageNumber++;
    }

    goToPreviousPage(){
        cy.get('input[value="Previous').click();
        this.currentPageNumber--;
    }

    getProgressBar() {
        return cy.get('.progress span');
    }

    getCurrentPageNumber() {
        return this.currentPageNumber;
    }

    isLastPage() {
        return this.currentPageNumber === this.numberOfpages;
    }

    submitSurvey() {
        cy.get('input[value="Complete"]').click();
    }
}

export default Survey;