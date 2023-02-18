const { When, Then} = require("@badeball/cypress-cucumber-preprocessor");

When('I navigate to website', ()=> {
    cy.visit("https://www.way2automation.com/way2auto_jquery/registration.php#load_box");
})

Then('I click on login button', ()=> {
    cy.get('#register_form > fieldset:nth-child(1) > p:nth-child(1) > input[type=text]').type("ABC");
        cy.get(':nth-child(1) > :nth-child(2) > input').type("last name");
        cy.get(':nth-child(2) > .radio_wrap > :nth-child(1) > input').check();
        cy.get('#register_form > :nth-child(11) > input').type("password");
        
})
