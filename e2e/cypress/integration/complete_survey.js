describe('Complete Survey', () => {
  const goNextSurveyPage = () => {
    cy.get('input[value="Next"]').click();
  };

  const goPreviousSurveyPage = () => {
    cy.get('input[value="Previous').click();
  };

  before(() => {
    cy.server();
    cy.route('POST', '/api/survey').as('postSurvey');
  });

  it('display 1st and 2nd question on page load', () => {
    cy.visit('/');
    cy.contains(
      'Is your organisation currently practicing plan-driven or agile software development?',
    ).should('be.visible');
    cy.contains('How happy are you with your current software development process?').should(
      'be.visible',
    );
  });

  it('should not display glitchy numbering', () => {
    cy.contains(
      '1. Is your organisation currently practicing plan-driven or agile software development?',
    ).should('not.exist');
    cy.contains('2. How happy are you with your current software development process?').should(
      'not.exist',
    );
  });

  it('display 3rd question on selecting answers and going to the next page', () => {
    cy.contains('Mostly Agile').click();
    cy.contains('Somewhat happy').click();
    goNextSurveyPage();
    cy.contains('What units do you use for estimation?').should('be.visible');
  });

  it('display 1st and 2nd question on selecting previous page', () => {
    goPreviousSurveyPage();
    cy.contains('How happy are you with your current software development process?').should(
      'be.visible',
    );
  });

  it('display 3rd question on selecting next page', () => {
    goNextSurveyPage();
    cy.contains('What units do you use for estimation?').should('be.visible');
  });

  it('display 4th question on selecting answers and going to the next page', () => {
    cy.get('select').select('Story Points');
    goNextSurveyPage();
    cy.contains('How confident are you that your current project will be successful?').should(
      'be.visible',
    );
  });

  it('display 5th question on selecting answers and going to the next page', () => {
    cy.get('input[type="radio"][value="1"]')
      .parent()
      .click();
    goNextSurveyPage();
    cy.contains('Do teams in your organisation use Scrum?').should('be.visible');
  });

  it('display 6th question on selecting radio buttons', () => {
    cy.contains('No').click();
    cy.contains('Yes').click();
    cy.contains('How often do you reach your sprint goals?').should('be.visible');
  });

  it('display contact form on selecting answers and going to the next page', () => {
    cy.contains('We achieve them sometimes').click();
    goNextSurveyPage();
  });

  it('display results page on submission of contact details', () => {
    cy.get('input[aria-label="Company Name"').type('Zuhlke');
    cy.get('input[aria-label="Email"').type('example@zuhlke.com');
    cy.get('input[value="Complete"]').click();
    cy.contains('Thank you for participating!');
  });

  it('display correct results data', () => {
    cy.get('.agility')
      .find('.score-bar')
      .its('width')
      .should('be', '80%');
    cy.get('.estimation')
      .find('.score-bar')
      .its('width')
      .should('be', '100%');
    cy.get('.mood')
      .find('.score-bar')
      .its('width')
      .should('be', '20%');
    cy.get('.scrum')
      .find('.score-bar')
      .its('width')
      .should('be', '60%');
  });

  it('display correct number of links and profiles', () => {
    cy.get('.linkSection ul')
      .children('.card')
      .should('have.length', 4);
    cy.get('.contacts .profiles')
      .children('.profile')
      .should('have.length', 2);
  });

  it('display correct text on feedback submission', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="feedback"]').type('This was a great survey!');
    cy.get('#privacy-agreement').click();
    cy.get('button[type="submit"]').click();
    cy.contains('Thank you for your feedback!');
  });
});
