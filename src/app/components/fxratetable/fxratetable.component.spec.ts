import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxratetableComponent } from './fxratetable.component';

describe('FxratetableComponent', () => {
  let component: FxratetableComponent;
  let fixture: ComponentFixture<FxratetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxratetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FxratetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
