import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubenterpriseComponent } from './subenterprise.component';

describe('SubenterpriseComponent', () => {
  let component: SubenterpriseComponent;
  let fixture: ComponentFixture<SubenterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubenterpriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubenterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
