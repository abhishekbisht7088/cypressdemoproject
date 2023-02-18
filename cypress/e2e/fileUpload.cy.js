/// <reference types="cypress"/>

// cypress file upload url  https://cgi-lib.berkeley.edu/ex/fup.html

// npm i cypress-file-upload, add import in commands.js

beforeEach(function() {
    cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html");
})

describe("File upload  ",function() {

    it("file upload", function() {

        const path = "saiki.jpg";
        cy.get('input[name="upfile"]').attachFile(path);
    })
})