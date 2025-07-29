import { Component, OnInit } from '@angular/core';
import { UserloginData } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logingdata = new UserloginData();
  showPassword = false;

  constructor(
    private userservice: UserService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  Userloggin(): void {
    const loginData = {
      Email: this.logingdata.Email,
      Password: this.logingdata.Password
    };

    this.userservice.logingdata(loginData).subscribe(
      res => {
        console.log(res, "Login response");

        if (res?.entity?.token && res.message === "Login successful") {
          this.loginSuccess(res.entity);
        } else {
          alert("❌ Login failed: " + res.message);
        }
      },
      err => {
        alert("❌ Error during login.");
        console.error("Login error:", err);
      }
    );
  }

  loginSuccess(res: any): void {
    alert("✅ Login Successful");

    localStorage.setItem('token', res.token);
    localStorage.setItem('userName', res.userName);
    localStorage.setItem('email', res.email);
    localStorage.setItem('role', res.role);
    localStorage.setItem('userId', res.userId.toString());

    this.router.navigate(['/home']);
  }
}
