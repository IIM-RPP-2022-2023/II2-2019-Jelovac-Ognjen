import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentDialogComponent } from './pacijent-dialog.component';

describe('PacijentDialogComponent', () => {
  let component: PacijentDialogComponent;
  let fixture: ComponentFixture<PacijentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacijentDialogComponent]
    });
    fixture = TestBed.createComponent(PacijentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
