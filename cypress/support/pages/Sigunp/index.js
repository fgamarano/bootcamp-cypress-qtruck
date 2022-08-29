import modal from '../components/Modal'

class SignupPage {

    constructor() {
        this.modal = modal
    }

    go(){
        cy.visit('/signup')
    }

    form(user){
        cy.get('input[name=name]').type(user.name)
        cy.get('input[name=instagram]').type(user.instagram)
        cy.get('input[name=password]').type(user.password)

    }

    submit() {
        cy.contains('button', 'Cadastrar').click()
    }
}

export default new SignupPage()