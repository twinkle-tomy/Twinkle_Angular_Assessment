import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTreeSidePanelComponent } from './project-tree-side-panel.component';

describe('ProjectTreeSidePanelComponent', () => {
  let component: ProjectTreeSidePanelComponent;
  let fixture: ComponentFixture<ProjectTreeSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTreeSidePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTreeSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
