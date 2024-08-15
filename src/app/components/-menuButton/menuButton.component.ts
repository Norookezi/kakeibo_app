import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menuButton',
  templateUrl: './menuButton.component.html',
  styleUrls: ['./menuButton.component.css'],
})
export class MenuButtonComponent implements OnInit {
  @Input() menuOpen: boolean = false;

  @Output() menuStateChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  buttonInteract() {
    this.menuOpen = !this.menuOpen;
    this.menuStateChanged.emit(this.menuOpen);
  }
}
