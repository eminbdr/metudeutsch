import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion/accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { AccordionEnComponent } from './accordion-en/accordion-en.component';

describe('AccordionEnComponent', () => {
  let component: AccordionEnComponent;
  let fixture: ComponentFixture<AccordionEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionEnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

