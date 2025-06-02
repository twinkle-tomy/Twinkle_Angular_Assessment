import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContractServiceService } from '../../../services/contract-service.service';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operation',
  imports: [
    MatTabGroup, MatTab,CommonModule, MatTooltip,
     MatAccordion, MatExpansionPanel, MatExpansionPanelHeader,
    MatButtonToggle, MatIcon, MatButtonToggleGroup,FormsModule],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})
export class OperationComponent {
  @ViewChild('scrollWrapper', {static : false}) scrollWrapper!:ElementRef

  selectedText: string = '';
  todayDate: Date = new Date();

  isExpanded = true;
  isTotalDocumentsChecked = true;
  isBackLogChecked = false;
  isForecastChecked = false;
  isNotAckChecked = false;
  isStepChecked = false;
  isRuleStreamChecked = false;

  selectedFisicalWeek: string = '';
  FiscialWeeks = [
    { label: 'Today', count: 25 },
    { label: 'FW 6, 2025 (This Week)', count: 7 },
    { label: 'FW 7, 2025 (Next Week)', count: 0 },
    { label: 'FW 8, 2025', count: 1 }
  ];

  tabColumns: string[] = [];
  tabRows: any[] = [];
  tabCount : number = 0;

  constructor(private contractService : ContractServiceService)
  {

  }

  ngOnInit(): void {

    // Load ISPO tabular

    this.contractService.getContracts().subscribe(data => {
      this.tabRows = data.products;
      if (this.tabRows.length) {
        this.tabColumns = Object.keys(this.tabRows[0]);
        this.tabCount = this.tabRows.length;
      }
    });

  this.contractService.selectedContracts$.subscribe(items => {
    if (items.length === 0) {
      this.selectedText = '';
    } else {
      this.selectedText = items.map(i => i.description).join(', ');
    }
  });

  }

  toggleCheckBoxButtons(buttonName : string) {

    if (buttonName == "totalDocuments") {
      this.isTotalDocumentsChecked = !this.isTotalDocumentsChecked;
    }
    else if (buttonName == "backlogs") {
      this.isBackLogChecked = !this.isBackLogChecked;
    }

    else if (buttonName == "forecast") {
      this.isForecastChecked = !this.isForecastChecked;
    }
    else if (buttonName == "notAck") {
      this.isNotAckChecked = !this.isNotAckChecked;
    }
    else if (buttonName == "step") {
      this.isStepChecked = !this.isStepChecked;
    }
    else if (buttonName == "ruleStream") {
      this.isRuleStreamChecked = !this.isRuleStreamChecked;
    }
  }

  getFiscialWeek(count: number): string {
    if (count >= 15) return 'high-count';
    if (count >= 5) return 'medium-count';
    return 'low-count';
  }

  scroll(direction: number): void {
    const wrapper = this.scrollWrapper.nativeElement;
    wrapper.scrollLeft += direction * 100;
  }

}
