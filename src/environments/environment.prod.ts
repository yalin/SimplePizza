export const environment = {
  production: true,

  pizzaSizes: [
    {
      name: 'Small',
      price: 5,
      toppings: [],
      offers: []
    },
    {
      name: 'Medium',
      price: 7,
      toppings: [],
      offers: [
        {
          name: 'Offer 2',
          toppingsCount: 4,
          price: 9,
          discountPercent: false
        },
        {
          name: 'Offer 1',
          toppingsCount: 2,
          price: 5,
          discountPercent: false
        }
      ]
    },
    {
      name: 'Large',
      price: 8,
      toppings: [],
      offers: [
        {
          name: 'Offer 3',
          toppingsCount: 4,
          price: 50,
          discountPercent: true
        }
      ]
    },
    {
      name: 'Extra Large',
      price: 9,
      toppings: [],
      offers: []
    }
  ],

  pizzaToppings: [
    {
      name: 'Tomatoes',
      price: 1,
      vegan: true,
      rate: 1
    },
    {
      name: 'Onions',
      price: 0.5,
      vegan: true,
      rate: 1
    },
    {
      name: 'Bell pepper',
      price: 1,
      vegan: true,
      rate: 1
    },
    {
      name: 'Mushrooms',
      price: 1.2,
      vegan: true,
      rate: 1
    },
    {
      name: 'Pineapple',
      price: 0.75,
      vegan: true,
      rate: 1
    },
    {
      name: 'Sausage',
      price: 1,
      vegan: false,
      rate: 1
    },
    {
      name: 'Pepperoni',
      price: 2,
      vegan: false,
      rate: 2
    },
    {
      name: 'Barbecue',
      price: 3,
      vegan: false,
      rate: 2
    }
  ]
};
