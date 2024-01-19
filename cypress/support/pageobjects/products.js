/// <reference types="Cypress" />
import loc from '../locators/products'

class TelaProducts {

    buscarProduto(produto){
        cy.get(loc.pesquisa.labelBusca)
        .type(produto)
        cy.get(loc.pesquisa.lupaPesquisa)
        .click()
    }
}

export default TelaProducts