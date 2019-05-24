import Survey from '../elements/Survey';

describe('Complete Survey', () => {
  before(() => {
    cy.server();
    cy.route('POST', '/api/survey').as('postSurvey');
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('should fill out the survey and submit without an error', () => {
    Survey.chooseAnswer('Mostly Agile');
    Survey.chooseAnswer('Somewhat happy');
    Survey.nextPage();

    Survey.shouldShowQuestion('What units do you use for estimation?');
    Survey.previousPage();
    Survey.shouldShowQuestion('How happy are you with your current software development process?');
    Survey.nextPage();

    Survey.selectAnswerFromDropdown('Story Points');
    Survey.nextPage();

    Survey.selectRating('1');
    Survey.nextPage();

    Survey.chooseAnswer('No');
    Survey.shouldNotShowQuestion('How often do you reach your sprint goals?');
    Survey.chooseAnswer('Yes');
    Survey.shouldShowQuestion('How often do you reach your sprint goals?');
    Survey.chooseAnswer('We achieve them sometimes');
    Survey.nextPage();

    Survey.enterTextBox('Company Name', 'Zuhlke');
    Survey.enterTextBox('Email', 'example@zuhlke.com');
    Survey.submit();

    Survey.shouldShowResultPage();
    Survey.shouldShowPercentage('Agility', 80);
    Survey.shouldShowPercentage('Estimation', 100);
    Survey.shouldShowPercentage('Mood', 20);
    Survey.shouldShowNumberOfLinks(6);
    Survey.shouldShowNumberOfProfiles(2);

    Survey.giveFeedback('This was a great survey!');
  });
});
