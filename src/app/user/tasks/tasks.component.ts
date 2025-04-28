import { Component } from '@angular/core';
import { PageSidePanelComponent } from '../../shared/page-side-panel/page-side-panel.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-tasks',
  imports: [PageSidePanelComponent, PageHeaderComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

      title="Tasks"

}
