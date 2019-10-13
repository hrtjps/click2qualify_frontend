import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInvitesComponent } from './project-invites.component';

describe('ProjectInvitesComponent', () => {
  let component: ProjectInvitesComponent;
  let fixture: ComponentFixture<ProjectInvitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInvitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
