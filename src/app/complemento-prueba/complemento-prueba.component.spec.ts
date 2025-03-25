import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementoPruebaComponent } from './complemento-prueba.component';

describe('ComplementoPruebaComponent', () => {
  let component: ComplementoPruebaComponent;
  let fixture: ComponentFixture<ComplementoPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplementoPruebaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplementoPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
