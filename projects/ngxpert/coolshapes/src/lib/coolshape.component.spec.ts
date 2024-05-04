import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolshapesComponent } from './coolshape.component';

describe('CoolshapesComponent', () => {
  let component: CoolshapesComponent;
  let fixture: ComponentFixture<CoolshapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoolshapesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoolshapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
