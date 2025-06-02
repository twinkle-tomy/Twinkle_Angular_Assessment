import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContractServiceService {
  private apiUrl = 'https://dummyjson.com/products';

  private selectedContractSource =  new BehaviorSubject<any[]>([]);
  selectedContracts$ = this.selectedContractSource.asObservable();

  constructor(private http : HttpClient) { }

    getContracts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

    updateSelectedItems(items: any[]) {

    this.selectedContractSource.next(items);
          console.log("From Service");
      console.log(this.selectedContractSource);
  }
}
