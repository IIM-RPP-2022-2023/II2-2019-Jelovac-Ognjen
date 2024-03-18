import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjeDialogComponent } from './odeljenje-dialog.component';

describe('OdeljenjeDialogComponent', () => {
  let component: OdeljenjeDialogComponent;
  let fixture: ComponentFixture<OdeljenjeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdeljenjeDialogComponent]
    });
    fixture = TestBed.createComponent(OdeljenjeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
