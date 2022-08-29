import loginPage from '../support/pages/login'
import mapPage from '../support/pages/map'

describe('Login', () => {

  it('Deve fazer login', () => {

    const user = {
      name: 'Evie',
      instagram: '@eviebike',
      password: 'pwd123'
    }

    cy.apiCreateUser(user)

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    mapPage.loggedUser(user.name)
  })

  it('Não deve logar com senha inválida', () => {

    const user = {
      instagram: '@eviebike',
      password: '123456'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('Não deve logar com instangra inexistente', () => {

    const user = {
      instagram: '@babisantos',
      password: 'pwd123'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('Instagram deve ser obrigatório', () => {

    const user = {
      password: 'pwd123'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('Senha deve ser obrigatório', () => {

    const user = {
      instagram: '@ana_banana'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('Todos os campos devem ser obrigatório', () => {

    loginPage.go()
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })

})
