import { Jugador } from "./clases";

describe('Pruebas de clase', ()=>{

  let jugador = new Jugador();


  beforeAll( ()=> {
    console.log('beforeAll');

  });
  beforeEach( ()=> {
    console.log('beforeEach');
    // jugador.hp = 100;
    jugador = new Jugador();
  });
  afterAll( ()=> {
    console.log('afterAll');

  });
  afterEach( ()=> {
    console.log('afterEach');
    // jugador.hp = 100;
  });


  it('Debe retornar 80 hp si recibe 20 danio',()=>{

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);

    expect(resp).toBe(80);

  });

  it('Debe retornar 50 hp si recibe 50 danio',()=>{

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);

    expect(resp).toBe(50);

  });

  xit('Debe retornar 0 hp si recibe 100 de danio o mas',()=>{

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(110);

    expect(resp).toBe(0);

  });



});
