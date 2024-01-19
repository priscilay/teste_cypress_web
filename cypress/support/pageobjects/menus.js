/// <reference types="Cypress" />
import loc from '../locators/menus'

class Menus {
    acessarMenus(menu){
    switch (menu) {
      case 'Products':
        cy.xpath(loc.products)
        .click()
        break;
      case 'Cart':
        cy.xpath(loc.cart)
        .click() 
        break; 
        }
    }
}

export default Menus