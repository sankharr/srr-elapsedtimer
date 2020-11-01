import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElapsedtimerComponent } from './elapsedtimer.component';

describe('ElapsedtimerComponent', () => {
  let component: ElapsedtimerComponent;
  let fixture: ComponentFixture<ElapsedtimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElapsedtimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElapsedtimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
