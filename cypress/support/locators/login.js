/**
 * Constante com locators referente a pagina de Login
 * Autor: Priscila Ribeiro
 * Data: 18/01/24
 */

const Login = {
    login:{
        user: '//a[@href="/login"]',
        password: 'input[data-qa="login-password"]',
        botaoEntrar: 'button[data-qa="login-button"]',
        validar: '//a[(text()=" Logout")]'
    }
}
export default Login