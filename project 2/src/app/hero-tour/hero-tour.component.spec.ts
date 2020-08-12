import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTourComponent } from './hero-tour.component';

describe('HeroTourComponent', () => {
  let component: HeroTourComponent;
  let fixture: ComponentFixture<HeroTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
