

describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://www.amcharts.com/demos/pie-chart/')
  })

  it('displays two todo items by default', () => {
    cy.wait(3000)
    cy.get('div#chartdiv canvas:nth-child(2)').realMouseMove(590, 182);
    cy.get('div[role="tooltip"]').should('be.visible')
    cy.get('div[role="tooltip"]').should('have.text','Lithuania: 32.64%')
    cy.wait(5000)
  })

})
