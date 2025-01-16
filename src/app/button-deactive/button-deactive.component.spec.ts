import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeactiveComponent } from './button-deactive.component';

describe('ButtonDeactiveComponent', () => {
  let component: ButtonDeactiveComponent;
  let fixture: ComponentFixture<ButtonDeactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDeactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonDeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
