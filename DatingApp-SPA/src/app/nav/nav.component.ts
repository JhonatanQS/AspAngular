import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(public authService: AuthService, private alertity: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertity.success('login sucesso');

    }, error => {
      this.alertity.error('falha  login');
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
      return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertity.message('logged out');
    this.router.navigate(['/home']);
  }
}
