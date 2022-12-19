describe('Visiting the URL', () => {
  var i = 0;
  for (i = 0; i < 2 ; i++){
    it('Visits the URL', () => {
      cy.visit('https://search.spockanalytics.xyz/0xC081996E8FfD1dA3F4784C4B8b6Ef8E07333163E')
      //cy.get(':nth-child(4) > .css-cqmm24 > .css-q9mwpa > .css-1fh3dsh > .MuiChip-label > .css-j5wbys').should('have.value', '333')
      //*[@id="root"]/div/div[2]/div[3]/div[4]/div/div[3]/div[2]/span/div
      //cy.get('div').should('have.class', '.css-j5wbys')
      cy.get('*[class="css-j5wbys"]').contains("loading")
      cy.wait(7000)
      cy.get('*[class="css-j5wbys"]').contains("333")
    })
  }
})