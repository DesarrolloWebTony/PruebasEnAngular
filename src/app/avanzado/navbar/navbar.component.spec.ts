import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';


import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener un link a la pagina de medicos', () => {
    
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    console.log(debugElements);
    
    let existe = false;

    for( const elem of debugElements){
      if (elem.attributes['routerLink'] === '/medicos') {
        existe = true;
        break;
      }
    }

    expect(existe).toBeTruthy();

  });


});


