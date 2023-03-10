import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyImageComponent } from './daily-image.component';

describe('DailyImageComponent', () => {
  let component: DailyImageComponent;
  let fixture: ComponentFixture<DailyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
