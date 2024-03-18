import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolnicaComponent } from './bolnica.component';

describe('BolnicaComponent', () => {
  let component: BolnicaComponent;
  let fixture: ComponentFixture<BolnicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BolnicaComponent]
    });
    fixture = TestBed.createComponent(BolnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
