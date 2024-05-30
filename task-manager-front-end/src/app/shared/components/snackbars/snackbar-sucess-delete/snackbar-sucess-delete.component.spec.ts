import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarSucessDeleteComponent } from './snackbar-sucess-delete.component';

describe('SnackbarSucessDeleteComponent', () => {
  let component: SnackbarSucessDeleteComponent;
  let fixture: ComponentFixture<SnackbarSucessDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarSucessDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarSucessDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
