/* eslint-disable no-unused-vars */
import coffeeChocolateQuente from '../assets/coffe-chocolate-quente.png'
import coffeeComLeite from '../assets/coffee-ao-leite.png'
import coffeCapuccino from '../assets/coffee-capuccino.png'
import coffeeCubano from '../assets/coffee-cubano.png'
import coffeeAmericano from '../assets/coffee-expresso-americano.png'
import coffeeCremoso from '../assets/coffee-expresso-cremoso.png'
import coffeeGelado from '../assets/coffee-expresso-gelado.png'
import coffeeTradicional from '../assets/coffee-expresso-tradicional.png'
import coffeeHavaiano from '../assets/coffee-havaiano.png'
import coffeeIrlandes from '../assets/coffee-irlandes.png'
import coffeeLatte from '../assets/coffee-latte.png'
import coffeMocaccino from '../assets/coffee-mocacciono.png'
import coffeeMucchiato from '../assets/coffee-mucchiato.png'
import coffeeArabe from '../assets/coffeeArabe.png'

export enum CategoriesTypes {
  tradicional = 'Tradicional',
  especial = 'Especial',
  comLeite = 'Com Leite',
  gelado = 'Gelado',
  alcoolico = 'Alcoólico',
}

export const coffes = [
  {
    photo: coffeeTradicional,
    categories: [CategoriesTypes.tradicional],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    photo: coffeeAmericano,
    categories: [CategoriesTypes.tradicional],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    photo: coffeeCremoso,
    categories: [CategoriesTypes.tradicional],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    photo: coffeeGelado,
    categories: [CategoriesTypes.tradicional, CategoriesTypes.gelado],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },

  {
    photo: coffeeComLeite,
    categories: [CategoriesTypes.tradicional, CategoriesTypes.comLeite],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },

  {
    photo: coffeeLatte,
    categories: [CategoriesTypes.tradicional, CategoriesTypes.comLeite],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },

  {
    photo: coffeCapuccino,
    categories: [CategoriesTypes.tradicional, CategoriesTypes.comLeite],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    photo: coffeeMucchiato,
    categories: [CategoriesTypes.tradicional, CategoriesTypes.comLeite],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },

  {
    photo: coffeMocaccino,
    categories: [CategoriesTypes.tradicional, CategoriesTypes.comLeite],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },

  {
    photo: coffeeChocolateQuente,
    categories: [CategoriesTypes.especial, CategoriesTypes.comLeite],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },

  {
    photo: coffeeCubano,
    categories: [
      CategoriesTypes.especial,
      CategoriesTypes.alcoolico,
      CategoriesTypes.gelado,
    ],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },

  {
    photo: coffeeHavaiano,
    categories: [CategoriesTypes.especial],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },

  {
    photo: coffeeArabe,
    categories: [CategoriesTypes.especial],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },

  {
    photo: coffeeIrlandes,
    categories: [CategoriesTypes.alcoolico, CategoriesTypes.gelado],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
