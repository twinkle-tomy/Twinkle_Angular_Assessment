import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-login-screen',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  

  constructor(private router:Router, private authService : AuthenticationService)
  {
    this.loginForm.reset(); // Clear the form
    localStorage.clear();
  }

  ngOnInit(): void {
    
  }

  login()
  {    
    if (this.loginForm.valid)
    {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      const success = this.authService.login(username?? 'defaultUsername', password?? 'defaultPwd');

      if(success)
        {
          localStorage.setItem('userToken', 'W@tyfg#$%'); // Example token
          this.router.navigate(['otr']);
        }
        else
        {
          alert("Invalid credentials, redirecting to login page !!!");
          this.loginForm.reset(); // Clear the form
          this.router.navigate(['login']);
        }
    }
    else {
      console.log('Form is invalid');
      alert("Invalid credentials, redirecting to login page !!!");
      this.loginForm.reset(); // Clear the form
      this.router.navigate(['login']);
    }

  }
}
