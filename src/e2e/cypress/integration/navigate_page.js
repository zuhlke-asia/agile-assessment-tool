describe("Navigate", function () {

    before(function(){

    });

    beforeEach(function(){
        cy.visit("http://localhost:8080");
        cy.server();
        cy.route('POST', '/api/userscores').as('submitForm')
    });

    it("should Navigate all the pages without an error ", function () {

        cy.get('.progress span').contains("Page 1 of 4")
        cy.contains("Mostly Agile").click();
        cy.contains("Somewhat happy").click();
        cy.get('input[value="Next"]').click();
        cy.get('.progress span').contains("Page 2 of 4");
        cy.get('select').select('Story Points');
        cy.get('input[value="Next"]').click();
        cy.get('.progress span').contains("Page 3 of 4");
        cy.contains("5").click();
        cy.get('input[value="Next"]').click();
        cy.get('.progress span').contains("Page 4 of 4");
        cy.get('input[aria-label="Company Name').type("Zuhlke");
        cy.get('input[aria-label="Email').type("example@zuhlke.com");
        cy.get('input[value="Complete"]').click();

        cy.wait('@submitForm').then(xhr => {
            const status = xhr.xhr.status;
            expect(status).to.equal(200);
        });
    });

    it("should navigate backwards if previous is clicked.", function(){
        cy.get('.progress span').contains("Page 1 of 4")
        cy.contains("Mostly Agile").click();
        cy.contains("Somewhat happy").click();
        cy.get('input[value="Next"]').click();
        cy.get('.progress span').contains("Page 2 of 4");
        cy.get('input[value="Previous"]').click();
        cy.get('.progress span').contains("Page 1 of 4");
    });

})
