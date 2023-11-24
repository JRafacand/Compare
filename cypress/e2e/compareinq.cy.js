import { validarTitulos, validarContenido } from '../support/utils';
require('cypress-xpath');

describe('compare', () => {
  it('compare search', () => {
    cy.visit('https://antarcticbookingcenter.com/ecommerce-develop/antarctic/search/0/0/1/2024/0/90000/0/0/0/0/4/0/0');
    cy.get('title').invoke('text').as('titlePrimary');
    cy.wait(1000);
    cy.get('h4').invoke('text').as('h4text');
    cy.wait(1000);
    cy.get('#navbarNav').invoke('text').as('textbar');
    cy.wait(1000);
    cy.get('[style="text-align: center;"]').invoke('text').as('texresults');
    cy.wait(1000);
    cy.get('p.small').invoke('text').as('psmalltext');
    cy.wait(1000);
    cy.get('.col-lg-3').invoke('text').as('textcolrig');
    cy.wait(4000);
    for (let i = 1; i <= 13; i++) {
      cy.get(`:nth-child(${i}) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise > a`).click();
      cy.wait(1000);
      cy.get(`:nth-child(${i}) > [onmouseenter="activeHover()"] > .col-12`).invoke('text').as(`textPrimary${i}`);
      cy.wait(1000);
    };
    cy.visit('https://antarcticbookingcenter.com/ecommerce/antarctic/search/0/0/1/2024/0/90000/0/0/0/0/4/0/0');
    cy.get('title').invoke('text').as('titleSecond');
    validarTitulos('@titlePrimary', '@titleSecond');
    cy.wait(1000);
    cy.get('h4').invoke('text').as('h4text1');
    validarContenido('@h4text', '@h4text1');
    cy.wait(1000);
    cy.get('#navbarNav').invoke('text').as('textbar1');
    validarContenido('@textbar', '@textbar1');
    cy.wait(1000);
    cy.get('p.small').invoke('text').as('psmalltext1');
    validarContenido('@psmalltext', '@psmalltext1');
    cy.wait(1000);
    cy.get('[style="text-align: center;"]').invoke('text').as('texresults1');
    validarContenido('@texresults', '@texresults1');
    cy.wait(1000);
    cy.get('.col-lg-3').invoke('text').as('textcolrig1');
    validarContenido('@textcolrig', '@textcolrig1');
    cy.wait(4000);
    for (let i = 1; i <= 13; i++) {
      cy.get(`:nth-child(${i}) > [onmouseenter="activeHover()"] > .col-12 > .cruise-list-card > .no-gutters > .col-lg-8 > .p-3 > .row > .col-lg-7 > #description-cruise > a`).click();
      cy.wait(1000);
      cy.get(`:nth-child(${i}) > [onmouseenter="activeHover()"] > .col-12`).invoke('text').as(`textSecondary${i}`);
      cy.wait(1000);
    };
    for (let i = 1; i <= 13; i++) {
      validarContenido(`@textPrimary${i}`, `@textSecondary${i}`);
    };
  });
});


