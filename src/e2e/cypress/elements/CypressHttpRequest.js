class CypressHttpRequest {

    startServer(){
        cy.server();
    };

    registerRouteServices(serviceAlias){
        cy.route('POST', '/api/survey').as(serviceAlias);
    }

}

export default CypressHttpRequest;