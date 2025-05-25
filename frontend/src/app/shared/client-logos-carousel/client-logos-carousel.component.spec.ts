import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLogosCarouselComponent } from './client-logos-carousel.component';

describe('ClientLogosCarouselComponent', () => {
  let component: ClientLogosCarouselComponent;
  let fixture: ComponentFixture<ClientLogosCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientLogosCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLogosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
