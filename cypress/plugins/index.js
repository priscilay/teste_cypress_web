/// <reference types="cypress" />

module.exports = (on, config) => {
    config.env.password       =  process.env.PASSWORD
}

// module.exports = (on, config) => {
    // config.env.sharedSecret =
      // process.env.apikey === 'apikey'
      // process.env.pssw === 'pssw'
  // 
    // return config
  // }

// const cucumber = require('cypress-cucumber-preprocessor').default
// module.exports = (on, config) => {
  // on('file:preprocessor', cucumber())
// }  
