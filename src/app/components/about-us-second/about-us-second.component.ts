import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/services/user.service';

@Component({
  selector: 'about-us-second',
  templateUrl: './about-us-second.component.html',
  styleUrls: ['./about-us-second.component.scss']
})
export class AboutUsSecondComponent {
    @Input() user: any = {name: ""};
    @Input() userImage: string = '';
    @Input() background: string = '';


  constructor() {}

}