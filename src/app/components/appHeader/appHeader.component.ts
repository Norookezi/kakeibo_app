import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-appHeader',
  templateUrl: './appHeader.component.html',
  styleUrls: ['./appHeader.component.css']
})
export class AppHeaderComponent implements OnInit {
  @Input() allowBack: boolean = false;
  @Input() type: "mobile"|"web" = "web";

  constructor(private _location: Location) {}

  ngOnInit() {}

  back() { this._location.back(); }
}
