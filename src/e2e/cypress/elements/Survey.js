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

    selectAnswerFromDropdown(answerText) {
        cy.get('select').select(answerText);
    }

    enterTextBox(questionName, answerText) {
        cy.get(`input[aria-label="${questionName}"`).type(answerText);
    }

    shouldShowResultPage() {
        cy.contains("Thanks!");
    }

    shouldShowConditionalQuestion(question) {
        cy.contains(question).should('be.visible');
    }
}

export default Survey;