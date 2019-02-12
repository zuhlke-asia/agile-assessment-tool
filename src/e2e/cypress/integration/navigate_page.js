import WelcomePage from '../elements/WelcomePage';
import Network from '../elements/CypressHttpRequest';

describe("Navigate", function () {

    let network;
    const POST_SURVEY_ALIAS = "postSurvey";

    before(function () {
        network = new Network();
        network.startServer();
        network.registerRouteServices(POST_SURVEY_ALIAS);
    });


    it("should fill out the surveys and submit without an error", () => {

        const welcome = new WelcomePage();
        welcome.visit();

        const survey = welcome.startSurvey();

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
        survey.enterTextBox('Company Name', 'Zuhlke');
        survey.enterTextBox('Email', 'example@zuhlke.com')
        survey.submit();

        survey.shouldShowOk();
        // network.waitForResponse(POST_SURVEY_ALIAS).then(xhr => {
        //     const status = xhr.xhr.status;
        //     expect(status).to.equal(200);
        // });


    });

    it("should navigate backwards if previous is clicked.", function () {
        const welcome = new WelcomePage();
        welcome.visit();

        const survey = welcome.startSurvey();

        survey.shouldBeOnPage(1)
        survey.chooseAnswer('Mostly Agile');
        survey.chooseAnswer('Somewhat happy');
        survey.nextPage();
        survey.shouldBeOnPage(2);
        survey.previousPage();
        survey.shouldBeOnPage(1);
    });

})
