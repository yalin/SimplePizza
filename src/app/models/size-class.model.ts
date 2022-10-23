import { ToppingClass } from './topping-class.model'
import { OfferClass } from './offer-class.model'

export class SizeClass {
  name: string = null
  price: number = 0
  toppings: ToppingClass[] = []
  offers: OfferClass[] = []
}
