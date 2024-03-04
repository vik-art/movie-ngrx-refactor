import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { HEADER_MENU_LIST } from 'src/app/common/constants/header-menu-list';
import { ImenuItem } from 'src/app/common/interfaces/menu.interface';
import { currentUser } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {
  menuListItems: Array<ImenuItem> = HEADER_MENU_LIST;
  mobileMenu: boolean = false;
  closeMenu: boolean = false;
  show = true;
  isAuthenticated = signal(false)

  constructor(
    private route: Router,
  ) {}

  ngOnInit(): void {
   }
  
  get stateName() {
    return this.show ? 'show' : 'hide';
  }
  toggle() {
    this.show = !this.show;
  }
  logOut(event: Event) {
    event.preventDefault();
    this.route.navigate(['/']);
  }
  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
    this.closeMenu = !this.closeMenu;
    this.toggle();
  }
  onRegister() {
    this.route.navigate(['/register']);
    this.mobileMenu = false;
    this.closeMenu = false;
  }
  onLogin() {
    this.route.navigate(['/login']);
    this.mobileMenu = false;
    this.closeMenu = false;
  }
}