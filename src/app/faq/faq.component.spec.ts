import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqComponent } from './faq_base.component';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { FaqenComponent } from './faq_base.component';

describe('FaqenComponent', () => {
  let component: FaqenComponent;
  let fixture: ComponentFixture<FaqenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
