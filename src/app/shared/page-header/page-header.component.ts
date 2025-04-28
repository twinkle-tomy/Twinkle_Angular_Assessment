import { Component, Input ,OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router} from '@angular/router';

@Component({
  selector: 'app-page-header',
  imports: [MatMenuModule,MatButtonModule,MatIconModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent implements OnInit{

  @Input() headerName: string = '';

  ngOnInit(){
  }

  constructor(private router:Router)
  {
    
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}
