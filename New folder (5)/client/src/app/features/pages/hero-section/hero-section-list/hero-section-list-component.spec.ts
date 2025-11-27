import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionListComponent } from './hero-section-list-component';

describe('HeroSectionListComponent', () => {
  let component: HeroSectionListComponent;
  let fixture: ComponentFixture<HeroSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
