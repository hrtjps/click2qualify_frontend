import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNotificationsComponent } from './dropdown-notifications.component';

describe('DropdownNotificationsComponent', () => {
  let component: DropdownNotificationsComponent;
  let fixture: ComponentFixture<DropdownNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
