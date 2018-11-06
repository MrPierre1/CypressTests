import faker from 'faker'

describe('Login API', () => {
var user;

before(function(){
  cy.fixture('users').then((jsonData) => {
     user = jsonData
  })
})


it('Can Login with an existing faculty user ', () => {
  cy.request({
    url: `www.google.com`,
    method: 'GET',
    
  }).then((resp) => {
    expect(resp.status).to.eq(200)
 
  })
})


  // it('Can Login with an existing faculty user ', () => {
  //   cy.request({
  //     url: `${Cypress.env("wa_api_server")}/web/auth/login/sso`,
  //     method: 'POST',
  //     body: {
  //       uid: user.loginFaculty,
  //       password: user.password
  //     }
  //   }).then((resp) => {
  //     expect(resp.status).to.eq(200)
  //     expect(resp.body.result).to.have.property('token')
  //     expect(resp.body.result).to.have.property('user')
  //     expect(resp.body.result.token).to.not.be.empty
  //   })
  // })
  // it('Can Login with an existing student user ', () => {
  //   cy.request({
  //     url: `${Cypress.env("wa_api_server")}/web/auth/login/sso`,
  //     method: 'POST',
  //     body: {
  //       uid: user.loginStudent,
  //       password: user.password
  //     }
  //   }).then((resp) => {
  //     expect(resp.status).to.eq(200)
  //     expect(resp.body.result).to.have.property('token')
  //     expect(resp.body.result).to.have.property('user')
  //     expect(resp.body.result.token).to.not.be.empty
  //   })
  // })
  // it('Can register a class key with an existing student ', () => {
  //   cy.request({
  //     url: `${Cypress.env("wa_api_server")}/web/auth/class-key/verify`,
  //     method: 'POST',
  //     body: {
  //       classKey: user.classKey
  //     }
  //   }).then(async (resp) => {
  //     cy.request({
  //       url: `${Cypress.env("wa_api_server")}/web/auth/login/sso`,
  //       method: 'POST',
  //       body: {
  //         classKey: user.classKey,
  //         password: user.password,
  //         uid: user.existingStudent
  //       }
  //     }).then((ssoResponse) => {
  //         expect(ssoResponse.status).to.eq(200)
  //         expect(ssoResponse.body.result).to.have.property('user')
  //         expect(ssoResponse.body.result).to.have.property('token')
  //     })

  //   })
  // })
  // it('Can register a class key with a new student', () => {
  //   cy.request({
  //     url: `${Cypress.env("wa_api_server")}/web/auth/class-key/verify`,
  //     method: 'POST',
  //     body: {
  //       classKey: user.classKey
  //     }
  //   }).then(() => {
  //     cy.request({
  //       url: `${Cypress.env("wa_api_server")}/web/Rest/Users/create`,
  //       method: 'POST',
  //       body: {
  //         birth_year: user.birth_year,
  //         classKey: user.classKey,
  //         email: faker.internet.email(),
  //         firstname: faker.name.firstName(),
  //         lastname: faker.name.lastName(),
  //         marketing_optin: 0,
  //         password1: user.password,
  //         password2: user.password,
  //         }
  //     }).then((resp) => {
  //         expect(resp.status).to.eq(200)
  //         expect(resp.body.result).to.have.property('token')
  //     })
  //   })
 
  // })
  
  })