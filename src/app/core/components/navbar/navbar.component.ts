import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  logoImage = "/assets/img/logo.png";
  navbarLinks  = [
    {link:'/',name:'home'},
    {link:'/explore',name:'Explore'},
    {link:'/progress',name:'Progress'},
    {link:'/about',name:'About'},
    {link:'/docs',name:'Docs'},
  ]

}
