class CypressHttpRequest {
  static startServer() {
    cy.server();
  }

  static visitHomePage() {
    cy.visit('/');
  }

  static registerRouteServices(serviceAlias) {
    cy.route('POST', '/api/survey').as(serviceAlias);
  }
}

export default CypressHttpRequest;
