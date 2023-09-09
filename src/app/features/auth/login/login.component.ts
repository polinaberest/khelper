import { Component } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  model: LoginRequest;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.model = {
      email: '',
      password: '',
    };
  }

  onFormSubmit(): void {
    this.authService.login(this.model).subscribe({
      next: ({ id, email, name, roles, token }) => {
        // set auth cookie
        this.cookieService.set(
          'Authorization',
          `Bearer ${token}`,
          undefined,
          '/',
          undefined,
          true,
          'Strict'
        );

        // set User
        this.authService.setUser({
          id,
          email,
          name,
          roles,
        });

        // redirect to Home page after login
        this.router.navigateByUrl('/');
      },
    });
  }
}
