export default {
    1: {
        fillAnswers: () => {
            cy.contains("Mostly Agile").click();
            cy.contains("Somewhat happy").click();
        }
    },
    2: {
        fillAnswers: () => {
            cy.get('select').select('Story Points');
        }
    },
    3: {
        fillAnswers: () => {
            cy.contains("5").click();
        }
    },
    4: {
        fillAnswers: () => {
            cy.get('input[aria-label="Company Name').type("Zuhlke");
            cy.get('input[aria-label="Email').type("example@zuhlke.com");
        }
    }
};