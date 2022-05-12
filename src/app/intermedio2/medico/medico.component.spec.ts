import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from '../medico.service';
import { MedicoComponent } from "./medico.component";


describe('Medico component', () => {

    let component : MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {

        // component = new MedicoComponent();
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers : [ MedicoService ],
            imports: [ HttpClientModule ]
        });

        fixture = TestBed.createComponent( MedicoComponent );
        component = fixture.componentInstance;

    });
    

    it('debe de crearse el componente', () => {
        expect(component).toBeTruthy();
    });
    
    it('Debe retornar el nombre del medico', () => {
        
        const nombre = 'JUAN';
        const res = component.saludarMedico(nombre);

        expect(res).toContain(nombre);

    });
    

});