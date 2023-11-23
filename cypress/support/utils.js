export function validarTitulos(Primary, Second) {
    cy.get(Primary).then((Primary) => {console.log(Primary, 'primero')
      cy.get(Second).then((Second) => { console.log(Second, 'segundo')
        expect(Primary).to.eq(Second)
        expect(Primary).to.match(/galapagos/i); // La 'i' hace que la coincidencia sea insensible a mayúsculas y minúsculas
        expect(Second).to.match(/galapagos/i);
      });
    });
  }
  export function validarContenido(Primary, Second) {
    cy.get(Primary).then((Primary) => {console.log(Primary, 'primero')
      cy.get(Second).then((Second) => { console.log(Second, 'segundo')
        expect(Primary).to.eq(Second)
        expect(Primary).to.not.match(/galapagos/i); // La 'i' hace que la coincidencia sea insensible a mayúsculas y minúsculas
        expect(Second).to.not.match(/galapagos/i);
      });
    });
  }