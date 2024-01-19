import loc from '../locators/menus'

class Menus {
    acessarMenus(menu){
    switch (menu) {
      case 'Products':
        cy.xpath(loc.products)
        .click()
        break;
        }
    }
}

export default Menus