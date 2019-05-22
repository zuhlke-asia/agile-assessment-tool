import Network from '../elements/CypressHttpRequest';
import Survey from '../elements/Survey';

describe('Complete Survey', () => {
  let network;
  const POST_SURVEY_ALIAS = 'postSurvey';

  before(() => {
    network = new Network();
    network.startServer();
    network.registerRouteServices(POST_SURVEY_ALIAS);
  });

  beforeEach(() => {
    network.visitHomePage();
  });

  it('should fill out the survey and submit without an error', () => {
    const survey = new Survey();

    survey.chooseAnswer('Mostly Agile');
    survey.chooseAnswer('Somewhat happy');
    survey.nextPage();

    survey.shouldShowQuestion('What units do you use for estimation?');
    survey.previousPage();
    survey.shouldShowQuestion('How happy are you with your current software development process?');
    survey.nextPage();

    survey.selectAnswerFromDropdown('Story Points');
    survey.nextPage();

    survey.selectRating('1');
    survey.nextPage();

    survey.chooseAnswer('No');
    survey.shouldNotShowQuestion('How often do you reach your sprint goals?');
    survey.chooseAnswer('Yes');
    survey.shouldShowQuestion('How often do you reach your sprint goals?');
    survey.chooseAnswer('We achieve them sometimes');
    survey.nextPage();

    survey.enterTextBox('Company Name', 'Zuhlke');
    survey.enterTextBox('Email', 'example@zuhlke.com');
    survey.submit();

    survey.shouldShowResultPage();
    survey.shouldShowPercentage('Agility', 80);
    survey.shouldShowPercentage('Estimation', 100);
    survey.shouldShowPercentage('Mood', 20);
    survey.shouldShowNumberOfLinks(6);
    survey.shouldShowNumberOfProfiles(2);

    survey.giveFeedback('This was a great survey!');
  });
});
