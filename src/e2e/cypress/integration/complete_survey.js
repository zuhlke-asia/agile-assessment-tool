import Network from '../elements/CypressHttpRequest';
import Survey from '../elements/Survey';

describe("Complete Survey", function () {

    let network;
    const POST_SURVEY_ALIAS = "postSurvey";

    before(function () {
        network = new Network();
        network.startServer();
        network.registerRouteServices(POST_SURVEY_ALIAS);
    });

    beforeEach(function () {
        network.visitHomePage();
    })

    it("should fill out the survey and submit without an error", () => {

        const survey = new Survey(5);

        survey.shouldBeOnPage(1);
        survey.chooseAnswer('Mostly Agile');
        survey.chooseAnswer('Somewhat happy');
        survey.nextPage();


        survey.shouldBeOnPage(2);
        survey.selectAnswerFromDropdown('Story Points');
        survey.nextPage();

        survey.shouldBeOnPage(3);
        survey.selectRating('1');
        survey.nextPage();

        survey.shouldBeOnPage(4);
        survey.chooseAnswer('No');
        survey.nextPage();

        survey.shouldBeOnPage(5);
        survey.enterTextBox('Company Name', 'Zuhlke');
        survey.enterTextBox('Email', 'example@zuhlke.com')
        survey.submit();

        survey.shouldShowResultPage();
        survey.shouldShowPercentage('Agility', 80);
        survey.shouldShowPercentage('Estimation', 100);
        survey.shouldShowPercentage('Mood', 20);
    });

    it("should navigate backwards if previous is clicked.", function () {

        const survey = new Survey(5);


        survey.shouldBeOnPage(1)
        survey.chooseAnswer('Mostly Agile');
        survey.chooseAnswer('Somewhat happy');
        survey.nextPage();
        survey.shouldBeOnPage(2);
        survey.previousPage();
        survey.shouldBeOnPage(1);
    });

    it("should show condition question if conditional questions are triggered", function(){

        const survey = new Survey(5);


        survey.shouldBeOnPage(1);
        survey.chooseAnswer('Mostly Agile');
        survey.chooseAnswer('Somewhat happy');
        survey.nextPage();


        survey.shouldBeOnPage(2);
        survey.selectAnswerFromDropdown('Story Points');
        survey.nextPage();

        survey.shouldBeOnPage(3);
        survey.chooseAnswer('5');
        survey.nextPage();

        survey.shouldBeOnPage(4);
        survey.chooseAnswer('Yes');
        survey.shouldShowConditionalQuestion('How often do you reach your sprint goals?');
        survey.chooseAnswer('We achieve them sometimes');
        survey.nextPage();

        survey.shouldBeOnPage(5);
        survey.enterTextBox('Company Name', 'Zuhlke');
        survey.enterTextBox('Email', 'example@zuhlke.com')
        survey.submit();

        survey.shouldShowResultPage();
    })

});
