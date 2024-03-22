import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { IsOpenService } from '../isOpen.service';

@Component({
  selector: 'app-mobile-menu-toggle',
  templateUrl: './toggle_button.component.html',
  styleUrls: ['./toggle_button.component.css']
})

export class Toggle_buttonComponent {
  @ViewChild('toggleMenuClosed') toggleMenuClosed!: ElementRef;
  @ViewChild('toggleMenuOpen') toggleMenuOpen!: ElementRef;

  isOpen: boolean = false;
  animation_step: number = 0;

  constructor(private renderer: Renderer2, private isOpenService: IsOpenService) {
    isOpenService.setIsOpen(false);
  }

  ngAfterViewInit(): void {
    console.log(this.toggleMenuClosed?.nativeElement);
    console.log(this.toggleMenuOpen?.nativeElement);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.isOpenService.setIsOpen(this.isOpen);
    for (const index of Array(101).keys()) {
      setTimeout(() => {
        const ind = Array.from(Array(101).keys()).sort(()=>{return this.isOpen? 1 : -1})[index]

        const toggleMenuClosed = ind;
        const toggleMenuOpen = 100-ind;

        if (index % 10 === 0) {
          console.log('toggleMenuClosed', toggleMenuClosed);
          console.log('toggleMenuOpen', toggleMenuOpen);
          console.log(this.isOpen)
        }

        this.renderer.setStyle(this.toggleMenuClosed.nativeElement, 'transform', `rotateZ(${(toggleMenuClosed * 3.6)}deg)`);
        this.renderer.setStyle(this.toggleMenuClosed.nativeElement, 'opacity', toggleMenuClosed/100);
        this.renderer.setStyle(this.toggleMenuOpen.nativeElement, 'transform', `rotateZ(${(toggleMenuOpen * 3.6)}deg)`);
        this.renderer.setStyle(this.toggleMenuOpen.nativeElement, 'opacity', toggleMenuOpen/100);

      }, 1*index);
    }
  }
}
