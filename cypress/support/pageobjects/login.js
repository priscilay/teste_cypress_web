import loc from '../locators/login'

class TelaLogin {

    acessarSite(url){
        cy.visit(url)
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    }

    loginSite(email, senha){
        cy.xpath(loc.login.user)
        .type(email)
        cy.get(loc.login.password)
        .type(senha)
        cy.get(loc.login.botaoEntrar)
        .click()
    }
}

export default TelaLogin