import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestDevoluComponent } from './emprest-devolu.component';

describe('EmprestDevoluComponent', () => {
  let component: EmprestDevoluComponent;
  let fixture: ComponentFixture<EmprestDevoluComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmprestDevoluComponent]
    });
    fixture = TestBed.createComponent(EmprestDevoluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
