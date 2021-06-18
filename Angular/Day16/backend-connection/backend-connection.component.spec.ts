import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendConnectionComponent } from './backend-connection.component';

describe('BackendConnectionComponent', () => {
  let component: BackendConnectionComponent;
  let fixture: ComponentFixture<BackendConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
