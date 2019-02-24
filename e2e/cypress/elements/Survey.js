class Survey {

    nextPage() {
        cy.get('input[value="Next"]').click();
    }

    previousPage() {
        cy.get('input[value="Previous').click();
    }


    submit() {
        cy.get('input[value="Complete"]').click();
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

    shouldShowQuestion(question) {
        cy.contains(question).should('be.visible');
    }

    shouldNotShowQuestion(question) {
        cy.contains(question).should('not.exist')

    }

    shouldShowNumberOfLinks(number) {
        cy
            .get('.linkSection ul')
            .children('.card')
            .should('have.length', number);
    }

    shouldShowNumberOfProfiles(number) {
        cy
            .get('.contacts .wrapper')
            .children('.profile')
            .should('have.length', number);
    }

    giveFeedback(feedback) {
        cy
            .get('textarea[name="feedback"]')
            .type(feedback);

        cy
            .get('button[type="submit"]')
            .click();

        cy.contains('Thank you for your feedback!')
    }
}

export default Survey;