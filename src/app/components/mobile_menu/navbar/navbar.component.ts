import { Component, OnInit } from '@angular/core';
import { IsOpenService } from '../isOpen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen: boolean = true;
  menus: { name: string, link: string }[] = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Projects', link: '/projects' },
    { name: 'Blog', link: '/blog' },
    { name: 'Resume', link: '/resume' }
  ]

constructor(private isOpenService: IsOpenService) {}

ngOnInit() {
  this.isOpenService.isOpen$.subscribe(isOpen => {
    this.isOpen = isOpen;
  });
}

}
