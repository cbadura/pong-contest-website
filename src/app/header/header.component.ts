import { Component } from '@angular/core';

@Component({
  selector: 'tcd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pages = ['Game', 'Leaderboard', 'Chat', 'Profile'];
}
