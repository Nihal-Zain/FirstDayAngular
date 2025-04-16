import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-setting-profile',
  imports: [],
  templateUrl: './setting-profile.component.html',
  styleUrl: './setting-profile.component.css'
})
export class SettingProfileComponent {
  message=input();
  changeData=output();

}
