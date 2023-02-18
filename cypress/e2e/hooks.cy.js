/// <reference types= "cypress"/>


// before, before each, after, after each

beforeEach(function() {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
})


describe("Validate first case", function() {

    it("mouse hover jQuery", function() {

        // visit performed in beforeEach

        cy.get(".mouse-hover-content").invoke('show');
        cy.contains("Top").click();

        // include {force:true} if issues with click, eg, cy.contains("Top").click({force:true});
        cy.url().should('include', 'top');
    })

    it("mouse hover ", function() {
        // visit performed in beforeEach

        cy.get("#mousehover").contains("Mouse Hover").trigger("mouseover");
        cy.contains("Top").click({force:true});

        // include {force:true} if issues with click, eg, cy.contains("Top").click({force:true});
        cy.url().should('include', 'top');
    })
})