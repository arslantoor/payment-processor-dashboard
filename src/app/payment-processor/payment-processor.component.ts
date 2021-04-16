import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-processor',
  templateUrl: './payment-processor.component.html',
  styleUrls: ['./payment-processor.component.scss']
})
export class PaymentProcessorComponent implements OnInit {
  public showPassword: boolean;
  public showPasswordOnPress: boolean;
  constructor() { }

  ngOnInit() {
  }

}
