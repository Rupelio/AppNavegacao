interface Food {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  image: any;
}

const foods: Food[] = [
  {
    id: '1',
    name: 'Meat Pizza',
    ingredients: 'Mixed Pizza',
    price: 8.30, // Alterado para um número
    image: require('../assets/meatPizza.png'),
  },
  {
    id: '2',
    name: 'Cheese Pizza',
    ingredients: 'Cheese Pizza',
    price: 7.10, // Alterado para um número
    image: require('../assets/cheesePizza.png'),
  },
  {
    id: '3',
    name: 'Chicken Burger',
    ingredients: 'Fried Chicken',
    price: 5.10, // Alterado para um número
    image: require('../assets/chickenBurger.png'),
  },
  {
    id: '4',
    name: 'Sushi Makizushi',
    ingredients: 'Salmon Meat',
    price: 9.55, // Alterado para um número
    image: require('../assets/sushiMakizushi.png'),
  },
];

export default foods;
