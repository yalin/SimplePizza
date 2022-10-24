import { Injectable } from '@angular/core'
import { SizeClass } from '../models/size-class.model'
import { ToppingClass } from '../models/topping-class.model'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

//
export class OrderService {
  sizeList: SizeClass[]
  vegToppings: ToppingClass[]
  nonVegToppings: ToppingClass[]

  constructor () {
    this.init()
  }

  init (): void {
    const sizes = []
    environment.pizzaSizes.forEach(x => {
      sizes.push(x)
    })
    this.sizeList = sizes

    // seperated vegan and non-vegan arrays
    const nvtoppings = []
    const vtoppings = []
    environment.pizzaToppings.forEach(x => {
      // if vegan push into vegan array
      if (x.vegan) {
        vtoppings.push(x)
      } else {
        // if non-vegan push into non-vegan array
        nvtoppings.push(x)
      }
    })
    this.vegToppings = vtoppings
    this.nonVegToppings = nvtoppings
  }
}
