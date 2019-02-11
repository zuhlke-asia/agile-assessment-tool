class CypressHttpRequest {

    startServer(){
        cy.server();
    };

    registerRouteServices(serviceAlias){
        cy.route('POST', '/api/survey').as(serviceAlias);
    }

    waitForResponse(serviceAlias){
        return  cy.wait(`@${serviceAlias}`)
            .then(xhr => Promise.resolve(xhr));
    }

}

export default CypressHttpRequest;