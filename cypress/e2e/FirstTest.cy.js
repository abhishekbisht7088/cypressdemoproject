/// <reference types= "cypress"/>

describe("Validate first case", function() {

    it("verify testcase", function(){
        cy.visit("https://ultimateqa.com/automation");
        //cy.contains("Courses");

        cy.request({
            method: 'POST',
            url: 'https://ultimateqa.com/automation',
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

        /*
        cy.intercept(
            {
                
            }, []).as('post')
        cy.get('@post').should(({request, response}) => {
            expect('request.method').to.equal('POST')
        });
        */
    })
})