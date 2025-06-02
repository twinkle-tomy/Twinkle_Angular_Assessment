import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { ProjectTreeSidePanelComponent } from "../../shared/project-tree-side-panel/project-tree-side-panel.component";
import { PageSidePanelComponent } from "../../shared/page-side-panel/page-side-panel.component";
import { OperationComponent } from "../../modules/OTR/operation/operation.component";

@Component({
  selector: 'app-otr',
  imports: [PageHeaderComponent, ProjectTreeSidePanelComponent, PageSidePanelComponent, OperationComponent],
  templateUrl: './otr.component.html',
  styleUrl: './otr.component.css'
})
export class OtrComponent {

      title="OTR"

}
