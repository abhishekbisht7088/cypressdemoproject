/// <reference types = "cypress" />

describe("Actions cases", function() {

    it("check box validation", function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        cy.get("input[type='checkbox']").check(["option2","option3"]).should('be.checked');
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
    })

    it("drop down validation", function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        // cy.get('select tag: select').select()
        cy.get('#dropdown-class-example').select('option1').should('have.value',"option1");
    })

    it("dynamic dropdown validation", function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        
        // type incomplete text, pick suggestions from list and iterate , compare and select
        cy.get('#autocomplete').type('bri');
        // class and inside div... so => class=ui-menu-item + <div>
        cy.get('.ui-menu-item div').each(($lt) => {
            console.log($lt.text());

            if($lt.text() == "British Indian Ocean Territory") {
                cy.wrap($lt).click();
            }
        })

        cy.get('#autocomplete').should("have.value", "British Indian Ocean Territory");

    })

    it("radio button validation", function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get('input[type="radio"]').check(["radio2"]).should('be.checked').and('have.value', 'radio2')
    })
})