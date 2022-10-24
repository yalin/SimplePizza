import { Component, OnInit, Input } from '@angular/core'
import { SizeClass } from 'src/app/models/size-class.model'
import { ToppingClass } from 'src/app/models/topping-class.model'
import { OrderService } from 'src/app/services/order.service'

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  @Input() size: SizeClass
  @Input() topping: ToppingClass
  constructor (public orderService: OrderService) {}

  ngOnInit (): void {}

  get isChecked (): boolean {
    // if selected topping is in this size pizza's toppings
    // then it means it is checked
    const result = this.size.toppings.includes(this.topping)
    return result
  }

  click (): boolean {
    setTimeout(() => {
      if (this.isChecked) {
        const index: number = this.size.toppings.indexOf(this.topping)
        this.size.toppings.splice(index, 1)
      } else {
        // push the topping to the selected list
        this.size.toppings.push(this.topping)
      }
    })
    return false
  }
}
