import { Component, Input } from '@angular/core';

@Component({
  selector: 'pricing-option',
  templateUrl: './pricing-option.component.html',
  styleUrls: ['./pricing-option.component.scss']
})
export class PricingOption {

    @Input() price: number = 22;
    @Input() option: string = 'Opción 1';
}
