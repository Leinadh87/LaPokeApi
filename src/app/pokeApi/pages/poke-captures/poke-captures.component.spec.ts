import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCapturesComponent } from './poke-captures.component';

describe('PokeCapturesComponent', () => {
  let component: PokeCapturesComponent;
  let fixture: ComponentFixture<PokeCapturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCapturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCapturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
