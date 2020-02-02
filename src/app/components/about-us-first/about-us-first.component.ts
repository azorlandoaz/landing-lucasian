import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-us-first',
  templateUrl: './about-us-first.component.html',
  styleUrls: ['./about-us-first.component.scss']
})
export class AboutUsFirstComponent {
    @Input() user: any = {name: ""};
    @Input() userImage: string = '';
    @Input() background: string = '';


  constructor() {}

}