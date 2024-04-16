import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WortschatzComponent } from './wortschatz.component';

describe('WortschatzComponent', () => {
  let component: WortschatzComponent;
  let fixture: ComponentFixture<WortschatzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WortschatzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WortschatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
