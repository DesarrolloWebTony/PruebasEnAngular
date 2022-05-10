import { obtenerRobots } from "./arreglos";


describe('Pruebas de arreglos', ()=>{

  it('retornan al menos 3 robots', ()=>{

    const resp = obtenerRobots();
    // expect(resp.length).toBe(3);
    expect(resp.length).toBeGreaterThanOrEqual(3);

  });

  it('Tener a megaman y a ultron',()=>{

    const res = obtenerRobots();
    expect(res).toContain('MegaMan');
    expect(res).toContain('Ultron');

  });

});
