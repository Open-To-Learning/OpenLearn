import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  logoImage = "/assets/img/logo.png";
  isuserLoggedIn = false;
  navbarLinks = [
    { link: '/', name: 'Home' },
    { link: '/explore', name: 'Explore' },
    { link: '/progress', name: 'Progress' },
    { link: '/about', name: 'About' },
    { link: '/docs', name: 'Docs' },
  ];
  profileFloatingNavigation =[
    { link: '/user/0', name: 'profile' },
    { link: '/settings', name: 'settings' },
  ]
  toggleprofile = false;

  isNavbarOpen = false;

  cookies: string = "";

  // constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Check if document object is available (not in Angular Universal or server-side rendering)
    if (typeof document !== 'undefined') {
      
      this.cookies = document.cookie.split("user=")[1];
      console.log(this.cookies);
      if(this.cookies){

        this.isuserLoggedIn = true;
      }
      
    }
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  toggleprofilefunc(){
    this.toggleprofile = !this.toggleprofile;
  }
  logout(){

  }
}
