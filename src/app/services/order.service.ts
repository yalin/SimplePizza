import { Injectable } from '@angular/core'
import { SizeClass } from '../models/size-class.model'
import { ToppingClass } from '../models/topping-class.model'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  sizes: SizeClass[]
  toppings: ToppingClass[]

  constructor () {

    this.reset()
  }

  reset (): void {
    const sizes = []
    environment.pizzaSizes.forEach(x => {
      sizes.push(x)
    })
    this.sizes = sizes

    const toppings = []
    environment.pizzaToppings.forEach(x => {
      toppings.push(x)
    })
    this.toppings = toppings

    // error: string;

    // eraseError(): void {
    //     setTimeout(() => {
    //         this.error = undefined;
    //     }, 5000)
    //   }
  }
}
