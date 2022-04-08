import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastViewedDossiersComponent } from './last-viewed-dossiers.component';

describe('LastViewedDossiersComponent', () => {
  let component: LastViewedDossiersComponent;
  let fixture: ComponentFixture<LastViewedDossiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastViewedDossiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastViewedDossiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
