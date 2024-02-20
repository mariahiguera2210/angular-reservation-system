import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userInfo: { name?: string, id?: number } | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userInfo$.subscribe(userInfo => {
      this.userInfo = userInfo;
    });
  }

  logout() {
    this.authService.logout();
  }

}
