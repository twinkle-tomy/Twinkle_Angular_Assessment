import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageSidePanelComponent } from '../../shared/page-side-panel/page-side-panel.component';

@Component({
  selector: 'app-digital',
  imports: [PageHeaderComponent, PageSidePanelComponent],
  templateUrl: './digital.component.html',
  styleUrl: './digital.component.css'
})
export class DigitalComponent {

            title="DIGITAL"

}
