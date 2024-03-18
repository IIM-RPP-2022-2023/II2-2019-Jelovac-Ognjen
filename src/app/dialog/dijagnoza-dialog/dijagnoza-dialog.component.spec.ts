import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DijagnozaDialogComponent } from './dijagnoza-dialog.component';

describe('DijagnozaDialogComponent', () => {
  let component: DijagnozaDialogComponent;
  let fixture: ComponentFixture<DijagnozaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DijagnozaDialogComponent]
    });
    fixture = TestBed.createComponent(DijagnozaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
