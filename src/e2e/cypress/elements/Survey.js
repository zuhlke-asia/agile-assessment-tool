class Survey {

    constructor(totalPage) {
        this.totalPage = totalPage;
    }

    nextPage() {
        cy.get('input[value="Next"]').click();
    }

    previousPage() {
        cy.get('input[value="Previous').click();
    }


    submit() {
        cy.get('input[value="Complete"]').click();
    }

    shouldBeOnPage(pageNumber) {
        cy.get('.progress span')
            .should('exist')
            .contains(`Page ${pageNumber} of ${this.totalPage}`);
    }

    chooseAnswer(answerText) {
        cy.contains(answerText).click()
    }

    selectRating(rating) {
        cy.get(`input[type="radio"][value="${rating}"]`).parent().click();
    }

    selectAnswerFromDropdown(answerText) {
        cy.get('select').select(answerText);
    }

    enterTextBox(questionName, answerText) {
        cy.get(`input[aria-label="${questionName}"`).type(answerText);
    }

    shouldShowResultPage() {
        cy.contains('Thank you for participating!')
    }

    shouldShowPercentage(category, percentage) {
        const className = category.toLowerCase();

        cy
            .get(`.${className}`)
            .find('.score-bar')
            .its('width')
            .should('be', `${percentage}%`);
    }

    shouldShowConditionalQuestion(question) {
        cy.contains(question).should('be.visible');
    }

    shouldNotShowConditionalQuestion(question) {
        cy.contains(question).should('not.exist')

    }
}

export default Survey;