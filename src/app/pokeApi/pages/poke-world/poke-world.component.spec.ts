import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeWorldComponent } from './poke-world.component';

describe('PokeWorldComponent', () => {
  let component: PokeWorldComponent;
  let fixture: ComponentFixture<PokeWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
