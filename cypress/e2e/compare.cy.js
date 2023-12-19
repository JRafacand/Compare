import { validarContenido, validarTitulos } from "../support/utils";


describe('compare', () => {
  it('compare search', () => {
    cy.visit('https://antarcticbookingcenter.com/ecommerce/antarctic/inquire/MTAy/1145');
    cy.get('title').invoke('text').as('titlePrimary');
    cy.wait(1000);
    cy.get('h4').invoke('text').as('h4text');
    cy.wait(1000);
    cy.get('.details > .col-lg-7').invoke('text').as('textcolrig');
    cy.visit('https://antarcticbookingcenter.com/ecommerce-develop/antarctic/inquire/MTAy/1145');
    cy.get('title').invoke('text').as('titleSecond');
    cy.wait(1000);
    validarTitulos('@titlePrimary', '@titleSecond');
    cy.wait(1000);
    cy.get('h4').invoke('text').as('h4text1');
    cy.wait(1000);
    validarContenido('@h4text', '@h4text1');
    cy.wait(1000);
    cy.get('.details > .col-lg-7').invoke('text').as('textcolrig1');
    cy.wait(1000);
    validarContenido('@textcolrig', '@textcolrig1');
    
  });
  
});

