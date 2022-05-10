import { usuarioLogin } from "./booleanos";


describe('pruebas de booleanos', ()=>{

  it('debe retornar true', ()=>{

    const res = usuarioLogin();

    // expect(res).toBe(true);
    expect(res).toBeTruthy();
    // expect(res).toBeFalsy();

  })

})
