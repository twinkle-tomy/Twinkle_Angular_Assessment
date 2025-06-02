import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-page-side-panel',
  imports: [MatTooltipModule],
  templateUrl: './page-side-panel.component.html',
  styleUrl: './page-side-panel.component.css'
})
export class PageSidePanelComponent {
  selectedButton = 1; // Default selected

  constructor(private toggleService: ToggleService,
    private authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.toggleService.toggleButtonSelected$.subscribe(value => {
      this.selectedButton = value ? 1 : 0;
    });
  }

  selectButton(buttonId: number): void {
    this.selectedButton = buttonId;

    if (this.selectedButton == 1) {
      this.toggleComponent();
    }
    else if (this.selectedButton == 4) {
      this.authenticationService.signOut();
    }
  }

  toggleComponent() {
    this.toggleService.toggleVisibility();
    this.toggleService.toggleButtonSelection();
  }

}
