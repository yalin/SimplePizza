import { Component, OnInit } from '@angular/core';
import { SizeClass } from 'src/app/models/size-class.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(public orderService: OrderService) {

   }

  ngOnInit(): void {
  }

  get sizes(): SizeClass[] {

    console.log("this.orderService.sizes:\n", this.orderService.sizes);
    return this.orderService.sizes;
  }

  getSizeCaption(size: SizeClass): string {
    return `${size.name} ($${size.price})`;
  }
}
