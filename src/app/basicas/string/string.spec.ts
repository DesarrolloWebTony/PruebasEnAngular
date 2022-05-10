// describe('Pruebas de strings');
// it('debe regresar un string');
import { mensaje } from "./string";

describe('Pruebas de strings',() => {

  it('Debe regresar un string',() => {

    const resp = mensaje('Antonio');
    expect(typeof resp).toBe('string');

  });

  it('Debe de retornan un saludo con el nombre enviado',() => {

    const nombre = 'Antonio'
    const resp = mensaje(nombre);
    expect(resp).toContain(nombre);

  });

});
