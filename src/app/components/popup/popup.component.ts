import { Component, Input } from '@angular/core';
import { IbudgetLine } from 'Interfaces/budgetLine';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  budgetLines: Array<IbudgetLine> = [];
}
