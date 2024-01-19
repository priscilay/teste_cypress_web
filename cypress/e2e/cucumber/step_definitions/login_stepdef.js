import { Given, When, Then }    from 'cypress-cucumber-preprocessor/steps'
import '../../../support/commands'
import menus from '../../../support/pageobjects/menus'
const menu = new menus
import products from '../../../support/pageobjects/products'
const prd = new products

beforeEach(() => {
    cy.login()
})

describe('Teste Cypress Web', ()=>{

    Given('que cliquei no menu "Products"', () => {
        menu.acessarMenus('Products')
    })
    
    // When('informar "usuario" e "senha"',function(usuario){
        // cy.get("//a[@href='/login']")
        // .click()
        // cy.get("input[data-qa='login-email']")
        // .type(usuario)
    // 
    // })
    // 
    // Then('devo realizar o login com sucesso' ,function(){
    // 
    // })


})

