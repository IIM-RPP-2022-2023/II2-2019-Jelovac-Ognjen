import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolnicaDialogComponent } from './bolnica-dialog.component';

describe('BolnicaDialogComponent', () => {
  let component: BolnicaDialogComponent;
  let fixture: ComponentFixture<BolnicaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BolnicaDialogComponent]
    });
    fixture = TestBed.createComponent(BolnicaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
