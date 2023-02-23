/// <reference types = "cypress" />
const { When, Then} = require("@badeball/cypress-cucumber-preprocessor");

// Before(() => {      //belongs to the cucumber
//     cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
// });

When("I see that check box is present", ()=> {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.get('#checkBoxOption1').should('be.visible');
})

Then("I perform Check Box Validation", ()=> {
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
})

