describe("My first Test", function () {
    beforeEach(function(){
        cy.visit("http://localhost:8080");
    });

    it("click first page", function () {
        cy.get('.progress span').contains("Page 1 of 4")
        cy.contains("Mostly Agile").click();
        cy.contains("Somewhat happy").click();
        cy.get('input[value="Next"]').click();
        cy.get('.progress span').contains("Page 2 of 4");
    })


})
