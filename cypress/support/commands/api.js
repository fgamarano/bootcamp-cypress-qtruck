
Cypress.Commands.add('apiResetUser', (instagram) => {
    cy.request({
        url: 'http://localhost:3333/helpers-reset',
        method: 'DELETE',
        qs: { instagram: instagram }
    }).then(response => {
        expect(response.status).to.eq(204)
    })
})

Cypress.Commands.add('apiCreateUser', (payload) => {

    cy.apiResetUser(payload.instagram)

    cy.request({
        url: 'http://localhost:3333/signup',
        method: 'POST',
        body: payload
    }).then(response => {
        expect(response.status).to.eq(201)
    })
})
Cypress.Commands.add('apiLogin', (payload) => {
    cy.request({
        url: 'http://localhost:3333/sessions',
        method: 'POST',
        body: payload
    }).then(response => {
        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.token)
    })
})

Cypress.Commands.add('apiCreateFoodTruck', (payload) => {
    cy.request({
        url: 'http://localhost:3333/foodtrucks',
        method: 'POST',
        body: payload,
        headers: {
            'authorization': Cypress.env('token')
        },
        failOnStatusCode: false
    })
})
