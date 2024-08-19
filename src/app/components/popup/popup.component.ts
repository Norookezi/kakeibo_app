import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-collapse',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Input({required: true}) title!: string;
}
