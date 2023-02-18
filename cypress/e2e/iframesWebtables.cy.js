/// <reference types = "cypress" />

/// <reference types = "cypress-iframe" />
import 'cypress-iframe'

describe("iframes and webtables", function() {

    // easy way, install cypress-iframe
    it("handle iframes in cypress via Cypress command", function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        cy.frameLoaded('#courses-iframe');

        // get webtable id, then click on the index by accessing using jQuery command 'eq'
        cy.iframe().find("a[href*='learning-path']").eq(0).click();
    })

    it("handle webtable in cypress", function() {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get("tr td:nth-child(2)").each(($el, index, $list) =>  {
            
            const tabledata= $el.text();
            
            if(tabledata.includes("WebServices")) {
                
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(pricedata) {
                    expect(pricedata.text()).to.equal('35')
                })
            }
        })
    })
})