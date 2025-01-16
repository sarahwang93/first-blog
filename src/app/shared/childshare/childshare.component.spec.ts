import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildshareComponent } from './childshare.component';

describe('ChildshareComponent', () => {
  let component: ChildshareComponent;
  let fixture: ComponentFixture<ChildshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildshareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
