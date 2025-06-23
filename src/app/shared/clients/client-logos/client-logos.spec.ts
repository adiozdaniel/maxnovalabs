import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLogos } from './client-logos';

describe('ClientLogos', () => {
  let component: ClientLogos;
  let fixture: ComponentFixture<ClientLogos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientLogos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLogos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
