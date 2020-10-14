/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  // https://on.cypress.io/interacting-with-elements

  it('should fail', () => {
    // https://on.cypress.io/type
    expect(false).to.be.false

  })

 
})
