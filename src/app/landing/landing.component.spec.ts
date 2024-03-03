import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { LandingenComponent } from './landingen.component';

describe('LandingenComponent', () => {
  let component: LandingenComponent;
  let fixture: ComponentFixture<LandingenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

