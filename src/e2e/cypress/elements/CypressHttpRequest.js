class CypressHttpRequest {

    startServer(){
        cy.server();
    };

    visitHomePage(){
        cy.visit('/');
    }

    registerRouteServices(serviceAlias){
        cy.route('POST', '/api/survey').as(serviceAlias);
    }

}

export default CypressHttpRequest;