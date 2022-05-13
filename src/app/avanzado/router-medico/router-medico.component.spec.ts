import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, EMPTY, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';


class FakeRouter{

  navigate( params:any ){
    console.log(params);
  }

}

class FakeActivaredRouter{

  // params:Observable<any> = EMPTY;

  private subject = new Subject();

  push(valor:any){
    this.subject.next(valor);
  }

  get params(){
    return this.subject.asObservable();
  }

}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      // providers: [ Router, ActivatedRoute ]
      providers: [ 
        { provide: Router, useClass: FakeRouter }, 
        { provide: ActivatedRoute, useClass: FakeActivaredRouter }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Debe de redireccionar a medico cuando se guarde', () => {
    
    const router =  TestBed.get(Router);
    const spy = spyOn(router,'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico','123']);

  });

  it('Debe de colocar el id = nuevo', () => {
    
    component = fixture.componentInstance;

    const activatedRouter: FakeActivaredRouter = TestBed.get(ActivatedRoute);
    activatedRouter.push({id:'nuevo'});
    
    expect(component.id).toBe('nuevo');


  });
  
  


});
