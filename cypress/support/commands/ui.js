import loginPage from '../pages/Login'
import mapPage from '../pages/Map'

Cypress.Commands.add('uiLogin', (user) => {
    loginPage.go('-19.965201096407863', '-43.96468877792359')
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
})

Cypress.Commands.add('setGeolocation', (lat, long) => {
    localStorage.setItem('qtruck:latitude', lat)
    localStorage.setItem('qtruck:longitude', long)
})