/// <reference types = "cypress" />

// why needed: to make the IDE aware of the fact that the code is of cypress for intelligent suggestions

describe("Alert cases", function() {

    it("Verify Alert and Confirm", function() {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        
        cy.get('#alertbtn').click();
        cy.on('window:alert', (str)=>{
            expect(str).to.equal("Hello , share this practice page and share your knowledge");
        } )

        cy.get('#confirmbtn').click();
        cy.on('window:confirm', function(str1) {
            expect(str1).to.contain("confirm");
        } )
    })

    it("Tab Handling and Validation", ()=> {

        // Cypress does not support cross browser tab natively.
        // so do those, we can handle it by removing attribute of new tab.

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'rahulshettyacademy');
        cy.go('back');

    })

    it("Tab Handling and Validation Version 2", ()=> {

        // Cypress does not support cross browser tab natively.
        // access via property and perform action
        
        // use a promise (resolve, pending, rejected)

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').then(function(data){
            const tab_info = data.prop('href');
            cy.get(data).click()
            cy.url().should('include', 'rahulshettyacademy');
            cy.go('back')
        })
        cy.go('back');

    })
})