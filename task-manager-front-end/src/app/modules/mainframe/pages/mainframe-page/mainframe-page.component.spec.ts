import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainframePageComponent } from './mainframe-page.component';

describe('MainframePageComponent', () => {
  let component: MainframePageComponent;
  let fixture: ComponentFixture<MainframePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainframePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainframePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
