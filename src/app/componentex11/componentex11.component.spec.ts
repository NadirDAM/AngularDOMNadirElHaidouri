import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentex11Component } from './componentex11.component';

describe('Componentex11Component', () => {
  let component: Componentex11Component;
  let fixture: ComponentFixture<Componentex11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentex11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentex11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
