import { Component } from '@angular/core';
import { PageSidePanelComponent } from '../../shared/page-side-panel/page-side-panel.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-letter-box',
  imports: [PageSidePanelComponent, PageHeaderComponent],
  templateUrl: './letter-box.component.html',
  styleUrl: './letter-box.component.css'
})
export class LetterBoxComponent {

    title="Letter Box"

}
