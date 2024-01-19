
Feature: Validacao em um carrinho de compras online

Scenario: Realizar inclusao de produtos no carrinho compras com sucesso
    Given que cliquei no menu "Products"
    When adicionar ao carrinho dress e jeans 
    Then devo validar se ambos estao no carrinho

    