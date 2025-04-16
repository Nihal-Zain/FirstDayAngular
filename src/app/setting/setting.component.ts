import { Component } from '@angular/core';
import { SettingProfileComponent } from '../setting-profile/setting-profile.component';
@Component({
  selector: 'app-setting',
  imports: [SettingProfileComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
  username:string='Nihal'
}
