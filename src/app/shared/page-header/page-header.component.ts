import { Component, Input ,OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-page-header',
  imports: [MatMenuModule,MatButtonModule,MatIconModule, MatTooltipModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent implements OnInit{

  @Input() headerName: string = '';

  ngOnInit(){
  }

  constructor(private authenticationService : AuthenticationService, private router : Router)
  {
    
  }

  LogOut() {
    this.authenticationService.signOut();
  }

  NavigateModule(moduleName:string) {    
    this.router.navigate([`${"/"}${moduleName}`]);
  }

}
