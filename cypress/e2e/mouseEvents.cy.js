/// <reference types ="cypress"/>

describe("Mouse actions", function() {
    
    it.skip("mouse hover jQuery", function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        cy.get(".mouse-hover-content").invoke('show');
        cy.contains("Top").click();

        // include {force:true} if issues with click, eg, cy.contains("Top").click({force:true});
        cy.url().should('include', 'top');
    })


    it("mouse hover ", function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        cy.get("#mousehover").contains("Mouse Hover").trigger("mouseover");
        cy.contains("Top").click({force:true});

        // include {force:true} if issues with click, eg, cy.contains("Top").click({force:true});
        cy.url().should('include', 'top');
    })
})

describe.skip("Mouse new", function() {



    it("mouse hover ", function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        cy.get("#mousehover").contains("Mouse Hover").trigger("mouseover");
        cy.contains("Top").click({force:true});

        // include {force:true} if issues with click, eg, cy.contains("Top").click({force:true});
        cy.url().should('include', 'top');
    })
})