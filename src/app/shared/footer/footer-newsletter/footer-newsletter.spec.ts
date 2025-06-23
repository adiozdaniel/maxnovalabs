import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNewsletter } from './footer-newsletter';

describe('FooterNewsletter', () => {
  let component: FooterNewsletter;
  let fixture: ComponentFixture<FooterNewsletter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterNewsletter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNewsletter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
