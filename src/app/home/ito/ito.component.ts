import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageSidePanelComponent } from '../../shared/page-side-panel/page-side-panel.component';

@Component({
  selector: 'app-ito',
  imports: [PageHeaderComponent, PageSidePanelComponent],
  templateUrl: './ito.component.html',
  styleUrl: './ito.component.css'
})
export class ITOComponent {
            title="ITO"

}
