import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //TESTING OR AUTOMATION TESTING  USING HEADER COMPONENT FROM APP COMPONENT

  it('CHECK NAME', () => {
    expect(component.name).toBe('jk');
  });
  it('get name', () => {
    expect(component.getname()).toBe('jk');
  });
  it('get sum', () => {
    expect(component.sum(10,20)).toBe(30);
  });

});
