import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPaneComponent } from './total-pane.component';

describe('TotalPaneComponent', () => {
  let component: TotalPaneComponent;
  let fixture: ComponentFixture<TotalPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
