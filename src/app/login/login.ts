import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iuser } from '../server/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit {
  loginForm: FormGroup;
  loginError: string = '';
  isLoggedIn: boolean = false;
  loggedUser: Iuser | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    try {
      const user = this.userService.getLogedUser();
      if (user) {
        this.isLoggedIn = true;
        this.loggedUser = user;
      }
    } catch (e) {
      this.isLoggedIn = false;
    }
  }

  Login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.loginError = 'Please fill in all required fields correctly';
      return;
    }

    const { username, password } = this.loginForm.value;

    this.userService.login({ username, password }).subscribe({
      next: ({ token, user }) => {
        // Store token and user in localStorage that come from database
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        this.userService.setLoggedUser(user);

        this.isLoggedIn = true;
        this.loggedUser = user;
        this.loginError = '';
        this.loginForm.reset();

        this.router.navigate(['/posts']);
      },
      error: (err) => {
        console.error('Login error:', err);
        this.loginError = err.error?.message || 'Invalid username or password';
      },
    });
  }

  logOut() {
    this.userService.logOutUser();
    this.isLoggedIn = false;
    this.loggedUser = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
