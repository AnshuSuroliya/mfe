// side-menu.component.ts

import { Input } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  @Output() showManageUsers = new EventEmitter<void>();
  @Output() showUserDetails = new EventEmitter<void>();
  @Input() menuOpen: boolean = false;

  constructor() { }

  handleShowManageUsers() {
    this.showManageUsers.emit();
  }

  handleShowUserDetails() {
    this.showUserDetails.emit();
  }
}

