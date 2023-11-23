import {validarTitulos, validarContenido} from '../support/utils';
require('cypress-xpath');
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://antarcticbookingcenter.com/ecommerce-develop/antarctic/search/0/0/1/2024/0/90000/0/0/0/0/4/0/0');
    cy.get('title').invoke('text').as('titlePrimary');
    cy.wait(4000);
    for (let i; i<13; i++){
    cy.get(':nth-child(``) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise > a').click();
    cy.get(':nth-child(1) > [onmouseenter="activeHover()"] > .col-12').invoke('text').as('textPrimary1');
    cy.wait(1000);
    cy.get(':nth-child(2) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise > a').click();   
    cy.get(':nth-child(2) > [onmouseenter="activeHover()"] > .col-12').invoke('text').as('textPrimary2');
    cy.wait(1000);
    cy.get(':nth-child(3) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise > a').click();   
    cy.get(':nth-child(3) > [onmouseenter="activeHover()"] > .col-12').invoke('text').as('textPrimary3');
    cy.wait(1000);
    cy.get(':nth-child(4) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise > a').click();   
    cy.get(':nth-child(4) > [onmouseenter="activeHover()"] > .col-12').invoke('text').as('textPrimary4');
    cy.wait(1000);
    cy.get(':nth-child(5) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise > a').click();   
    cy.get(':nth-child(5) > [onmouseenter="activeHover()"] > .col-12').invoke('text').as('textPrimary5');
    cy.wait(1000);
    cy.get(':nth-child(5) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise > a').click();   
    cy.get(':nth-child(5) > [onmouseenter="activeHover()"] > .col-12').invoke('text').as('textPrimary5');
    cy.wait(1000);
    }
    cy.visit('https://antarcticbookingcenter.com/ecommerce-develop/antarctic/search/0/0/1/2024/0/90000/0/0/0/0/4/0/0');
    cy.wait(5000);
    cy.get('title').invoke('text').as('titleSecond')
    validarTitulos('@titlePrimary', '@titleSecond');
    cy.get(':nth-child(1) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise > a').click();
    cy.wait(1000);
    cy.get(':nth-child(1) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise').invoke('text').as('textSecondary');
    validarContenido('@textPrimary', '@textSecondary');
    cy.wait(1000);
    cy.get(':nth-child(2) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise > a').click();   
    cy.wait(1000);
    cy.get(':nth-child(2) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise').invoke('text').as('textSecondary1');
    cy.wait(1000);  
    validarContenido('@textPrimary1', '@textSecondary1');
    cy.get(':nth-child(1) > [onmouseenter="activeHover()"] > .col-12').invoke('text').as('textSecondary2');
    validarContenido('@textPrimary2', '@textSecondary2');
  });  
  })


