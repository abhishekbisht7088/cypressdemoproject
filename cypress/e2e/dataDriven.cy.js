/// <reference types = "cypress" />

before(function() {
    cy.fixture('login').then(function(data){
        globalThis.data = data;
    })
})

beforeEach(function() {
    cy.visit("https://www.way2automation.com/way2auto_jquery/registration.php#load_box");
})

describe("Validate data driven tests", function() {

    it.skip("Verify login functionality", function() {

        cy.get('#register_form > fieldset:nth-child(1) > p:nth-child(1) > input[type=text]').type(data.name);
        cy.get(':nth-child(1) > :nth-child(2) > input').type("last name");
        cy.get(':nth-child(2) > .radio_wrap > :nth-child(1) > input').check();

        //password
        cy.get('#register_form > :nth-child(11) > input').type(data.password)

        
    })


    it("Data Driven via Excel - Verify login functionality", function() {

        const excelFilePath = "D:\\Projects\\cypressdemoproject\\Excel File\\excelDemo.xlsx"
        const sheetName = "Sheet1"

        // we use cy.task() -> 
        cy.task("generateJSONFromExcel", { excelFilePath, sheetName}). then( (user) => {
            cy.get('#register_form > fieldset:nth-child(1) > p:nth-child(1) > input[type=text]').type(user[0].email);
            cy.get(':nth-child(1) > :nth-child(2) > input').type("last name");
            cy.get(':nth-child(2) > .radio_wrap > :nth-child(1) > input').check();
            
            //password
            cy.get('#register_form > :nth-child(11) > input').type(user[0].password)
        })  
    })

    

})