import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formulario"


describe('Formularios',()=>{


    let componente: FormularioRegister;

    beforeEach( () => componente = new FormularioRegister( new FormBuilder()));

    it('debe crear un form con dos campos, email & password',()=>{

        expect( componente.form.contains('email') ).toBeTruthy();
        expect( componente.form.contains('password') ).toBeTruthy();

    });
    
    it('email obligatorio',()=>{

        const campo = componente.form.get('email');
        campo.setValue('');
        
        expect(campo.valid).not.toBeTruthy();

    });

    it('email debe ser un correo valido',()=>{

        const campo = componente.form.get('email');
        campo.setValue('grtgtQ@gmail.com');
        
        expect(campo.valid).toBeTruthy();

    });


})