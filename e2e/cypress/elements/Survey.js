class Survey {
  static nextPage() {
    cy.get('input[value="Next"]').click();
  }

  static previousPage() {
    cy.get('input[value="Previous').click();
  }

  static submit() {
    cy.get('input[value="Complete"]').click();
  }

  static chooseAnswer(answerText) {
    cy.contains(answerText).click();
  }

  static selectRating(rating) {
    cy.get(`input[type="radio"][value="${rating}"]`)
      .parent()
      .click();
  }

  static selectAnswerFromDropdown(answerText) {
    cy.get('select').select(answerText);
  }

  static enterTextBox(questionName, answerText) {
    cy.get(`input[aria-label="${questionName}"`).type(answerText);
  }

  static shouldShowResultPage() {
    cy.contains('Thank you for participating!');
  }

  static shouldShowPercentage(category, percentage) {
    const className = category.toLowerCase();

    cy.get(`.${className}`)
      .find('.score-bar')
      .its('width')
      .should('be', `${percentage}%`);
  }

  static shouldShowQuestion(question) {
    cy.contains(question).should('be.visible');
  }

  static shouldNotShowQuestion(question) {
    cy.contains(question).should('not.exist');
  }

  static shouldShowNumberOfLinks(number) {
    cy.get('.linkSection ul')
      .children('.card')
      .should('have.length', number);
  }

  static shouldShowNumberOfProfiles(number) {
    cy.get('.contacts .wrapper')
      .children('.profile')
      .should('have.length', number);
  }

  static giveFeedback(feedback) {
    cy.get('textarea[name="feedback"]').type(feedback);

    cy.get('button[type="submit"]').click();

    cy.contains('Thank you for your feedback!');
  }
}

export default Survey;
