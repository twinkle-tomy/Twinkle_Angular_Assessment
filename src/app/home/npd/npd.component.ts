import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageSidePanelComponent } from '../../shared/page-side-panel/page-side-panel.component';

@Component({
  selector: 'app-npd',
  imports: [PageHeaderComponent, PageSidePanelComponent],
  templateUrl: './npd.component.html',
  styleUrl: './npd.component.css'
})
export class NpdComponent {

        title="NPD"

}
