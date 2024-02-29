import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionEnComponent } from './accordion-en.component';

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
