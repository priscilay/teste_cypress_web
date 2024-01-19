/**
 * Constante com locators referente a pagina de Login
 * Autor: Priscila Ribeiro
 * Data: 18/01/24
 */

const Products = {
    pesquisa:{
        labelBusca: '#search_product',
        lupaPesquisa: '#submit_search'
    },
    carrinho:{
        xpathGenerico: produto => `a[data-product-id='${produto}']`
    }

    
}
export default Products