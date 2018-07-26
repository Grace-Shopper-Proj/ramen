'use strict'

const db = require('../server/db')
const {User, Ingredient, Category} = require('../server/db/models')
//const {broth, noodles, toppings, proteins} = require('../ingredients_data')
const category = require('../category_data')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  //creating ingreadients
  const ShioBroth = await Ingredient.create({
    title: 'Shio',
    description:
      'A clear and saltier soup base made with chicken, vegetables and salt. It is the oldest of the ramen broth. ',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl:
      'https://i.pinimg.com/originals/d2/b2/09/d2b20921e8cf9b504e7d897ae6595aae.jpg'
  })

  const ShoyuBroth = await Ingredient.create({
    title: 'Shoyu',
    description:
      'A tangy-flavored, clear, brown broth made with vegetable and soy souce',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl: 'https://truffle-assets.imgix.net/9a72cc13-ramentime6.png'
  })

  const UdonNoodles = await Ingredient.create({
    title: 'Udon',
    description: 'thick, chewy',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'http://kandscorporation.com/wp-content/uploads/2017/02/order-noodles-1848952632.png'
  })

  const CurlyNoodles = await Ingredient.create({
    title: 'Curly noodle',
    description: 'yellow, made with wheat and eggs.',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-EXTRA-NOODLE-2.png'
  })

  const noriTopping = await Ingredient.create({
    title: 'nori',
    description: 'crunchy seaweed',
    price: '1.00',
    inventory: 100,
    type: 'toppings',
    imageUrl:
      'https://www.superfoodevolution.com/images/nori-flakes-8oz-live-superfoods.png'
  })

  const EggTopping = await Ingredient.create({
    title: 'soft-boiled egg',
    description: 'egg that is soft-boiled and cutted a half',
    price: '1.00',
    inventory: 100,
    type: 'toppings',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-EGG.png'
  })

  const porkProtein = await Ingredient.create({
    title: 'pork',
    description: 'pork belly',
    price: '2.00',
    inventory: 100,
    type: 'protein',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-PORK.png'
  })

  //creating categories
  const nonDairy = await Category.create({name: 'non-dairy'})
  const noFish = await Category.create({name: 'no-fish'})
  const nonSpicy = await Category.create({name: 'non-spicy'})
  const soyFree = await Category.create({name: 'soy-free'})
  const glutenFree = await Category.create({name: 'gluten-free'})
  const vegetarian = await Category.create({name: 'vegetarian'})
  console.log(`seeded successfully`)

  //assign association
  await Promise.all([
    await ShioBroth.addCategory([
      nonSpicy,
      nonDairy,
      noFish,
      soyFree,
      glutenFree
    ]),
    await ShoyuBroth.addCategory([
      vegetarian,
      glutenFree,
      soyFree,
      nonSpicy,
      nonDairy,
      noFish
    ]),
    await UdonNoodles.addCategory([
      vegetarian,
      soyFree,
      nonSpicy,
      nonDairy,
      noFish
    ]),
    await CurlyNoodles.addCategory([soyFree, nonSpicy, nonDairy, noFish]),
    await noriTopping.addCategory([
      vegetarian,
      soyFree,
      glutenFree,
      nonSpicy,
      nonDairy,
      noFish
    ]),
    await EggTopping.addCategory([
      soyFree,
      glutenFree,
      nonSpicy,
      nonDairy,
      noFish
    ]),
    await porkProtein.addCategory([
      soyFree,
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree
    ])
  ])

  console.log(`assigned successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
