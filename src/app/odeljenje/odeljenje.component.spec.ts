import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjeComponent } from './odeljenje.component';

describe('OdeljenjeComponent', () => {
  let component: OdeljenjeComponent;
  let fixture: ComponentFixture<OdeljenjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdeljenjeComponent]
    });
    fixture = TestBed.createComponent(OdeljenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
