import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOperacionComponent } from './main-operacion.component';

describe('MainOperacionComponent', () => {
  let component: MainOperacionComponent;
  let fixture: ComponentFixture<MainOperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOperacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
