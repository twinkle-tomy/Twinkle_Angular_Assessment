import { Component } from '@angular/core';
import { PageSidePanelComponent } from '../../shared/page-side-panel/page-side-panel.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-faq',
  imports: [PageSidePanelComponent, PageHeaderComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

    title="FAQ"
}
