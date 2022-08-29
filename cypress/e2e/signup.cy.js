import signupPage from '../support/pages/sigunp'

describe('Signup', () => {

    it('Quando é um novo usuario', () => {

        const user = {
            name: 'John Constantine',
            instagram: '@constjonh',
            password: 'pwd123'
        }

        //cy.deleteMany({ instagram: user.instagram }, {collection: 'users'}).then(res => {
        //   cy.log(res)
        //})

        cy.apiResetUser(user.instagram)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()
        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })

    it('Não deve cadastrar instagram duplicado', () => {

        const user = {
            name: 'Brian OConner',
            instagram: '@e_obrian',
            password: 'pwd123'
        }

        cy.apiCreateUser(user)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()
        signupPage.modal.haveText('Instagram já cadastrado!')
    })
})


