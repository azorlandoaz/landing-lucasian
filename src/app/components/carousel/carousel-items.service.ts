import { Injectable } from '@angular/core';

import { User } from '../../services/user.service';

@Injectable()
export class CarouselItemsService {
    configUrl: string = 'http://jsonplaceholder.typicode.com/users';
    allUsers: User[] = [];

    constructor() { }

    reOrderListByNumber(breaker: number, list: any[]) {
        const orderedList: Array<Array<any>> = [];
        let breakerCount = 0;
        let orderedCount = 0;
        for (let index = 0; index < list.length; index++) {
            if (breakerCount === 0) {
                orderedList[orderedCount] = [list[index]];
                breakerCount++;
            } else if (breakerCount < breaker) {
                orderedList[orderedCount].push(list[index]);
                breakerCount++;
            } else {
                orderedCount++;
                breakerCount = 1;
                orderedList[orderedCount] = [list[index]];
            }

        }
        return orderedList;
    }
}