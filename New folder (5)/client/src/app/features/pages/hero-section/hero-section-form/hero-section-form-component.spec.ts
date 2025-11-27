import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionFormComponent } from './hero-section-form-component';

describe('HeroSectionFormComponent', () => {
  let component: HeroSectionFormComponent;
  let fixture: ComponentFixture<HeroSectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
