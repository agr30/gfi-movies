import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './shared/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GFI Movies';
  currentUser: any;

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {
    this.authService.currentUser.subscribe(data => this.currentUser = data);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
