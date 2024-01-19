/* global Given, Then, When, And */
import { Given, When, Then } from 'cypress-cucumber-preprocessor'
import '../../../support/commands'
import menus from '../../../support/pageobjects/menus'
const menu = new menus
import products from '../../../support/pageobjects/products'
const prd = new products
import Cart from '../../../support/pageobjects/cart'
const cart = new Cart


    beforeEach(() => {
        cy.login()
    })

    Given('que cliquei no menu Products', (produto)=>{
        menu.acessarMenus('produto')
    })
    
    When('adicionar ao carrinho dress', ()=>{
        prd.buscarProduto("dress")
        cart.adicionarProduto("3")
        cart.confirm()
    })
    
    Then('devo validar se ambos estao no carrinho' ,()=>{
        menu.acessarMenus('Cart')
        cy.should('have.text', 'Sleeveless Dress')
    })


