import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showSidebar = false;
  clickedCards = [false, false];

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  handleCardClick(index: number, url: string) {
    this.clickedCards[index] = true;
    window.open(url, '_blank');
  }

  showNotifications = false;

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
}
