import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSidePanelComponent } from './page-side-panel.component';

describe('PageSidePanelComponent', () => {
  let component: PageSidePanelComponent;
  let fixture: ComponentFixture<PageSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSidePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
