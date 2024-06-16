import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appNavBar',
  templateUrl: './appNavBar.component.html',
  styleUrls: ['./appNavBar.component.css'],
})
export class AppNavBarComponent implements OnInit {
  buttonClass = {
    selected: 'color-[#475368] fill-[#475368]',
    default: 'color-[#8D99AE] fill-[#8D99AE]',
  };
  @Input() selected: string = 'dashboard';
  @Output() changeSelected = new EventEmitter<string>();

  constructor(private _location: Location, private route: ActivatedRoute) {
    const page = this.route.snapshot.paramMap.get('page');
    this.selected = page!;
  }

  ngOnInit() {
  }

  select(selected: string) {
    if (this.selected === selected) return;

    this.selected = selected;

    this.changeSelected.emit(selected);

    this._location.go('#' + selected);
  }
}
