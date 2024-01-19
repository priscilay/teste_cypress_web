/// <reference types="Cypress" />
import loc from '../locators/cart'

class TelaCart {

    adicionarProduto(produto_id){
        cy.xpath(loc.carrinho.xpathGenerico(produto_id))
        .click()
    }

    confirm(){
        cy.xpath(loc.confirm)
        .click()
    }
}

export default TelaCart