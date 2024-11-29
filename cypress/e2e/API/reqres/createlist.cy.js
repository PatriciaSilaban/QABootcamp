/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('POST API Create List', () => {
        const requestBody = {
            name: 'Patricia Silaban',
            job: 'leader'
        };
        cy.request('POST', 'https://reqres.in/api/users' , requestBody).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.equal(201)
            expect(response.body).to.not.be.null
            expect(response.body.name).to.equal(requestBody.name)
            expect(response.body.job).to.equal(requestBody.job);
            })
    })
})