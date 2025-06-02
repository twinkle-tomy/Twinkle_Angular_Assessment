import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageSidePanelComponent } from '../../shared/page-side-panel/page-side-panel.component';

@Component({
  selector: 'app-brush',
  imports: [PageHeaderComponent,PageSidePanelComponent],
  templateUrl: './brush.component.html',
  styleUrl: './brush.component.css'
})
export class BrushComponent {

          title="BRUSH"

}
