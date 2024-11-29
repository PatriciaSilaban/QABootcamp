/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('POST API Register Successful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('token')
            expect(response.body).to.have.property('id')
        })
    })
})
