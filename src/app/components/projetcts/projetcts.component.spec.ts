import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetctsComponent } from './projetcts.component';

describe('ProjetctsComponent', () => {
  let component: ProjetctsComponent;
  let fixture: ComponentFixture<ProjetctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetctsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
