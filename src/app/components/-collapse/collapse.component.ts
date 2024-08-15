import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent {

  isCollapsed: boolean = false;

  toggleCollapse() {
    this.isCollapsed =!this.isCollapsed;
  }

  @Input({required: true}) title!: string;
}
