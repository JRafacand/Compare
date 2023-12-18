export function validarTitulos(Primary, Second) {
  cy.get(Primary).then((Primary) => {
    cy.get(Second).then((Second) => {
      expect(Primary).to.not.match(/galapagos/i);// La 'i' hace que la coincidencia sea insensible a mayúsculas y minúsculas
      expect(Primary).to.eq(Second);
      expect(Second).to.not.match(/galapagos/i)
    });
  });
}
export function validarContenido(Primary, Second) {
  cy.get(Primary).then((Primary) => {
     cy.get(Second).then((Second) => {
      expect(Primary).to.eq(Second)
      expect(Primary).to.not.match(/galapagos/i); // La 'i' hace que la coincidencia sea insensible a mayúsculas y minúsculas
      expect(Second).to.not.match(/galapagos/i);
    });
  });
}