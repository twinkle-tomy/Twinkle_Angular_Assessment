import { Component } from '@angular/core';
import { PageSidePanelComponent } from '../../shared/page-side-panel/page-side-panel.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-file-manager',
  imports: [PageSidePanelComponent, PageHeaderComponent],
  templateUrl: './file-manager.component.html',
  styleUrl: './file-manager.component.css'
})
export class FileManagerComponent {

    title="File Manager"
}
