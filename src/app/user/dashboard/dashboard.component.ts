import { Component } from '@angular/core';
import { PageSidePanelComponent } from '../../shared/page-side-panel/page-side-panel.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [PageSidePanelComponent, PageHeaderComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    title="Dashboard"

    data = [
      { category: 'ElectronicsA', item: 'SmartphoneA', details: '128GB, Black', price: '$699' },
      { category: 'FurnitureA', item: 'Office ChairA', details: 'Ergonomic Design', price: '$129' },
      { category: 'GroceriesA', item: 'Organic ApplesA', details: 'Pack of 6', price: '$5' },
      { category: 'ElectronicsB', item: 'SmartphoneB', details: '32GB, Black', price: '$799' },
      { category: 'FurnitureB', item: 'Office ChairB', details: 'Oval', price: '$229' },
      { category: 'GroceriesB', item: 'Organic ApplesB', details: 'Pack of 9', price: '$10' },
      { category: 'ElectronicsC', item: 'SmartphoneC', details: '32GB, White', price: '$200' },
      { category: 'FurnitureC', item: 'Office ChairC', details: 'Ergonomic Design', price: '$557' },
      { category: 'GroceriesC', item: 'Organic ApplesC', details: 'Pack of 12', price: '$45' },
      { category: 'ElectronicsD', item: 'SmartphoneD', details: '60GB, Gray', price: '$789' },
      { category: 'FurnitureD', item: 'Office ChairD', details: 'Ergonomic Design', price: '$276' },
      { category: 'GroceriesD', item: 'Organic ApplesD', details: 'Pack of 34', price: '$89' }
    ];

      constructor()
      {
      }
  

}
