import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  private visibility = new BehaviorSubject<boolean>(true);
  componentVisibility$ = this.visibility.asObservable();

  private buttonSelected = new BehaviorSubject<boolean>(true);
  toggleButtonSelected$ = this.buttonSelected.asObservable();

  constructor() { }

  ngOnInit(): void {
    console.log(this.visibility );
  }

    toggleVisibility() {
    const current = this.visibility.value;
    this.visibility.next(!current);
  }

  setVisibility(value: boolean) {
    this.visibility.next(value);
  }

      toggleButtonSelection() {
    const currentButton = this.buttonSelected.value;
    this.buttonSelected.next(!currentButton);
  }
}
