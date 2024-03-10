import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAComponent } from './quiz.component';

describe('QuizAComponent', () => {
  let component: QuizAComponent;
  let fixture: ComponentFixture<QuizAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { QuizBComponent } from './quiz.component';

describe('QuizBComponent', () => {
  let component: QuizBComponent;
  let fixture: ComponentFixture<QuizBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

