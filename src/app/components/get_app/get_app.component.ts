import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-getapp',
  templateUrl: './get_app.component.html',
  styleUrls: ['./get_app.component.css']
})
export class GetAppComponent {
  platformName!: string;

  constructor(private platform: Platform) {
    const platformName = this.getPlatformName();
    this.platformName = platformName;
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
