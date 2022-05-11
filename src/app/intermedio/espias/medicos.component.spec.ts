import { HttpClient, HttpHandler } from "@angular/common/http";
import { from, Observable, throwError } from "rxjs";

import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    let handler : HttpHandler;

    const servicio = new MedicosService( null as any );

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init debe cargar los mdicos', () => {

        const medicos = ['medico1','medico2','medico3'];

        spyOn(servicio,'getMedicos').and.callFake( ()=> {

            return from( [ medicos ] );

        });

        componente.ngOnInit();
        expect( componente.medicos.length ).toBeGreaterThan(0);
   
    });

    it('debe llamar al servidor para agregar un medico', ()=>{

        const espia = spyOn( servicio, 'agregarMedico' ).and.callFake( () => new Observable());

        componente.agregarMedico();

        expect( espia ).toHaveBeenCalled();

    });


    it('debe agregar un medico al arreglo',()=>{

        const medico = { id:1, nombre: 'Antonio' };

        spyOn(servicio,'agregarMedico').and.returnValue( from([medico]) );

        componente.agregarMedico();

        // expect( componente.medicos.length ).toBe(1);
        expect( componente.medicos.indexOf(medico) ).toBeGreaterThanOrEqual(0);

    });

    it('si falla la adicion de un nuevo medico la propiedad mensajeError debe ser igual al error del servicio',()=>{

        const miError = "no se pudo agregar el medico";

        spyOn(servicio, 'agregarMedico').and.returnValue(
            throwError(miError)
        );

        componente.agregarMedico();

        expect( componente.mensajeError ).toBe( miError );

    });

    it('debe llamar al servidor para borrar un medico',()=>{

        spyOn(window,'confirm').and.returnValue(true);

        const espia = spyOn(servicio,'borrarMedico').and.returnValue( new Observable())
        
        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');

    });

    it('NO debe llamar al servidor para borrar un medico',()=>{

        spyOn(window,'confirm').and.returnValue(false);

        const espia = spyOn(servicio,'borrarMedico').and.returnValue( new Observable())
        
        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');

    });

});
