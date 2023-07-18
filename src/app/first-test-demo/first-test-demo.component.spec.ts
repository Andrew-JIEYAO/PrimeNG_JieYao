import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTestDemoComponent } from './first-test-demo.component';

describe('FirstTestDemoComponent', () => {
  let component: FirstTestDemoComponent;
  let fixture: ComponentFixture<FirstTestDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirstTestDemoComponent]
    });
    fixture = TestBed.createComponent(FirstTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
