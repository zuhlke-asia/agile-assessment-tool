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

        while (!survey.isLastPage()) {
            survey.getProgressBar()
                .should('exist')
                .contains(`Page ${survey.getCurrentPageNumber()} of 4`);
            survey.fillAllAnswers();
            survey.goToNextPage();
        }

        //this is the last page
        survey.fillAllAnswers();
        survey.submitSurvey();


        network.waitForResponse(POST_SURVEY_ALIAS).then(xhr => {
            const status = xhr.xhr.status;
            expect(status).to.equal(200);
        });


    });

    it("should navigate backwards if previous is clicked.", function () {
        const welcome = new WelcomePage();
        welcome.visit();

        const survey = welcome.startSurvey();

        survey.getProgressBar()
            .should('exist')
            .contains(`Page 1 of 4`);
        survey.fillAllAnswers();
        survey.goToNextPage();
        survey.getProgressBar()
            .should('exist')
            .contains(`Page 2 of 4`);

        survey.goToPreviousPage();
        survey.getProgressBar()
            .should('exist')
            .contains(`Page 1 of 4`);
    });

})
