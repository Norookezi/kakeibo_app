import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-getapp',
  templateUrl: './get_app.component.html',
  styleUrls: ['./get_app.component.css']
})
export class GetAppComponent implements OnInit {
  platformName!: string;

  constructor(private platform: Platform) {
    const platformName = this.getPlatformName();
    this.platformName = platformName;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getPlatformName(): string {

    if (this.platform.ANDROID) {
      return 'android';
    } else if (this.platform.IOS) {
      return 'ios';
    } else {
      return 'other';
    }
  }
}
