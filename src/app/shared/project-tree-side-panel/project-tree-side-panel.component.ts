import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { ContractServiceService } from '../../services/contract-service.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-project-tree-side-panel',
  imports: [CommonModule, MatListModule, MatCheckboxModule,
    MatTooltipModule, MatIcon, FormsModule],
  templateUrl: './project-tree-side-panel.component.html',
  styleUrl: './project-tree-side-panel.component.css'
})
export class ProjectTreeSidePanelComponent {

  selectedFilter: string = 'all'; // default selection
  products: any[] = [];
  filteredProducts: any[] = [];
  searchText: string = '';

  toggleOptions = [
    { label: 'My Contracts', value: 'my' },
    { label: 'All Contracts', value: 'all' },
    { label: 'Favourites', value: 'favorites' },
  ];

  isVisible = false;
  selectedItems: any[] = [];


  constructor(private contractService: ContractServiceService, private toggleService: ToggleService) {
  }

  ngOnInit(): void {
    this.contractService.getContracts().subscribe((response) => {
      // Add custom properties
      this.products = response.products.map((product: any, index: number) => ({
        ...product,
        checked: index === 0, // Only the first is checked by default
        favorited: false
      }));
      this.applyFilter();
    });

    this.toggleService.componentVisibility$.subscribe(value => {
      this.isVisible = value;
      console.log(this.isVisible)
    });
  }

  toggleComponent() {
    this.toggleService.toggleVisibility();
    this.toggleService.toggleButtonSelection();
  }

  onCheckboxChange(product: any): void {

    if (product.checked)
    {
      this.selectedItems.push(product);
    }
    else
    {
     this.selectedItems = this.selectedItems.filter(i => i !== product);
    }

    this.PassSelectedContracts();
  }

  toggleFavorite(product: any): void {
    // Find the matching product in the original list
    const original = this.products.find(p => p.id === product.id);
    if (original) {
      original.favorited = !original.favorited;
    }

    // Now re-apply the filter
    this.applyFilter();
  }

  selectFilter(value: string) {
    this.selectedFilter = value;
    this.applyFilter(); // implement this to update the displayed list
  }

  onFilterChange(event: any): void {
    this.applyFilter();
  }

  applyFilter(): void {
    const filter = this.searchText.toLowerCase();

    let baseList = [...this.products];
    const firstItem = baseList[0];

    let result: any[] = [];

    if (this.selectedFilter === 'favorites') {
      result = baseList.filter(p => p.favorited);
    } else if (this.selectedFilter === 'all') {
      result = baseList;
    } else {
      result = [firstItem];
    }

    // Apply text filter
    result = result.filter(p => p.title.toLowerCase().includes(filter));

    // Deep copy: isolate `checked` state per view
    this.filteredProducts = result.map((product, index) => ({
      ...product,
      checked: index === 0// ✅ Only first one checked
    }));

      this.selectedItems = this.filteredProducts.filter(p => p.checked);
      this.PassSelectedContracts();
  }

  PassSelectedContracts()
  {
      this.contractService.updateSelectedItems([...this.selectedItems]);
      console.log("From Project Tree");
      console.log(this.selectedItems);
  }
}
