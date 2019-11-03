import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UesrRegisterComponent } from './uesr-register.component';

describe('UesrRegisterComponent', () => {
  let component: UesrRegisterComponent;
  let fixture: ComponentFixture<UesrRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UesrRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UesrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
