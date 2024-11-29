/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('POST API Login Successful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('token')
        })
    })
})