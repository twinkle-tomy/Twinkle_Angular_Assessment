import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router : Router, private dialog : MatDialog)
   {

   }

  login(username: string, password: string): boolean {
    if (username == 'admin' && password == 'admin123') {
      return true;
    }
    return false;
  }

   signOut(): void {
     const dialogRef = this.dialog.open(ConfirmDialogComponent, {
       width: '300px',
       data: {
         title: 'Confirm Action',
         message: 'Are you sure you want to logout?'
       }
     });
   
     dialogRef.afterClosed().subscribe(result => {
       if (result) // clicked YES     
       {
         this.LogOut();
       }
     });
   }

  LogOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
