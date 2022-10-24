import { Component, OnInit } from '@angular/core'
import { OfferClass } from 'src/app/models/offer-class.model'
import { SizeClass } from 'src/app/models/size-class.model'
import { ToppingClass } from 'src/app/models/topping-class.model'
import { OrderService } from 'src/app/services/order.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor (public orderService: OrderService) {}

  ngOnInit (): void {}

  get sizeList (): SizeClass[] {
    return this.orderService.sizeList
  }

  get nonVegToppingList (): ToppingClass[] {
    return this.orderService.nonVegToppings
  }

  get vegToppingList (): ToppingClass[] {
    return this.orderService.vegToppings
  }

  getSizesText (size: SizeClass): string {
    return `${size.name} ($${size.price})`
  }

  getToppingsText (nonVegTopping: ToppingClass): string {
    return `${nonVegTopping.name} ($${nonVegTopping.price.toFixed(2)})`
  }

  getOffer (size: SizeClass): OfferClass {
    if (
      !size.offers ||
      size.offers.length === 0 ||
      size.toppings.length === 0
    ) {
      return null
    }

    let totalWeight: number = 0
    size.toppings.forEach(x => (totalWeight += x.weight))

    let result: OfferClass
    for (let i = 0; i < size.offers.length; i++) {
      let offer = size.offers[i]
      if (offer.toppingsCount == totalWeight) {
        result = offer
        break
      }
    }
    return result
  }

  getSubTotal (size: SizeClass): number {
    if (size.toppings.length === 0) {
      return 0
    }
    let result = size.price
    size.toppings.forEach(x => (result += x.price))
    return result
  }

  getSubTotalText (size: SizeClass, offer: OfferClass, price): string {
    const amount: number = this.getOfferAmount(size, offer)
    if (!amount) return `$${price.toFixed(2)}`
    else {
      return `$${amount.toFixed(2)}`
    }
  }

  getSubTotalTextWithoutDiscount (size: SizeClass): string {
    return `$${this.getSubTotal(size).toFixed(2)}`
  }

  getOfferAmount (size: SizeClass, offer: OfferClass): number {
    if (!size.offers || size.offers.length === 0 || !offer) {
      return 0
    }
    let amount = offer.discountPercent
      ? (this.getSubTotal(size) * offer.price) / 100
      : offer.price
    return amount
  }

  getOfferText (size: SizeClass, offer: OfferClass): string {
    const amount: number = this.getOfferAmount(size, offer)
    if (!amount) {
      return ''
    }
    return `${offer.name}`
  }

  getSelectedToppingsCount (sizes: SizeClass[]): string {
    let result = 0
    sizes.forEach(s => s.toppings.forEach(t => (result += t.weight)))
    return result.toString()
  }
}
