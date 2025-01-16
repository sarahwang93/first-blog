import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialshareComponent } from './materialshare.component';

describe('MaterialshareComponent', () => {
  let component: MaterialshareComponent;
  let fixture: ComponentFixture<MaterialshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialshareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
