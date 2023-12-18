import { validarTitulos } from "../support/utils";


describe('compare', () => {
  it('compare search', () => {
    cy.visit('https://antarcticbookingcenter.com/ecommerce/antarctic/inquire/MTAy/1145');
    cy.get('title').invoke('text').as('titlePrimary');
    cy.wait(1000);
    cy.visit('https://antarcticbookingcenter.com/ecommerce-develop/antarctic/search/0/0/1/2024/0/90000/0/0/0/0/4/0/0');
    cy.get('title').invoke('text').as('titleSecond');
    cy.wait(1000);
    validarTitulos('@titlePrimary', '@titleSecond');
    
  });
  
});

