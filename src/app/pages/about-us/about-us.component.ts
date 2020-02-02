import { Component, OnInit } from '@angular/core';

import { UserService, User } from '../../services/user.service';
import { CarouselItemsService } from '../../components/carousel/carousel-items.service';

@Component({
  selector: 'about-us-section',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  items: any = [[],[],[]];

  constructor(private userService: UserService, private carouselService: CarouselItemsService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.items = this.carouselService.reOrderListByNumber(3, users);
    });
  }
}