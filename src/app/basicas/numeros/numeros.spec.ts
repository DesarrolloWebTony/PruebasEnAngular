import { incrementar } from "./numeros";


describe('Pruebas de numeros', ()=>{

  it('Retornar 100 si el num ingresado es mayor a 100', ()=>{

    const res = incrementar(300);
    expect(res).toBe(100);

  });

  it('Retornar num mas 1 si no es mayor a 100', ()=>{

    const res = incrementar(50);
    expect(res).toBe(51);

  });



});
