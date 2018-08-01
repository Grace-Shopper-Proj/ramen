'use strict'

const db = require('../server/db')
const {
  User,
  Ingredient,
  Category,
  Bowl,
  Order,
  Review
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  //creating ingredients
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

  const TonkotsuBroth = await Ingredient.create({
    title: 'Tonkotsu',
    description:
      'A thick, cloudy white, and hearty broth made with pork boiled for 12-15 hours.',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl: 'https://truffle-assets.imgix.net/888fce8e-ramentime3.png'
  })

  const MisoBroth = await Ingredient.create({
    title: 'Miso',
    description:
      'A sweet, nutty, and creamy soup base made with fermented soy beans',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl:
      'https://thevikingchef.files.wordpress.com/2011/03/miso_ramen_broth.jpg'
  })

  const SpicyBroth = await Ingredient.create({
    title: 'Spicy',
    description:
      'A spicy and flaverful broth made with vegetables and our secret sauce. Very popular!',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl:
      'https://media-cdn.tripadvisor.com/media/photo-s/0d/3c/6d/e3/spicy-pork-ramen.jpg'
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
    title: 'udon',
    description: 'thick, chewy',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'http://kandscorporation.com/wp-content/uploads/2017/02/order-noodles-1848952632.png'
  })

  const CurlyNoodles = await Ingredient.create({
    title: 'curly noodle',
    description: 'yellow, made with wheat and eggs.',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-EXTRA-NOODLE-2.png'
  })

  const SobaNoodles = await Ingredient.create({
    title: 'soba',
    description:
      'A brown, densed-texture, flavorful noodle, made with buckwheat. The healthiest choice of noodle, gluten-free.',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'https://www.citysuper.com.hk/getmedia/ab49c8cb-3e11-4abc-8559-aa1cf1f0554d/cold-warm-sake-09.png.aspx?width=475&height=300&ext=.png'
  })

  const RamenNoodles = await Ingredient.create({
    title: 'straight noodle',
    description: 'A thin wheat noodle, goes with variety of flavor.',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-EXTRA-NOODLE-1.png'
  })

  const GlutenFreeNoodles = await Ingredient.create({
    title: 'gluten-free noodle',
    description: 'chewy, gluten-free.',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-EXTRA-NOODLE-3.png'
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

  const chickenProtein = await Ingredient.create({
    title: 'chicken',
    description: 'Slices of tender marinated chicken breast.',
    price: '2.00',
    inventory: 100,
    type: 'protein',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-CHICKEN.png'
  })

  const tofuProtein = await Ingredient.create({
    title: 'organic tofu',
    description: 'tofu slices',
    price: '2.00',
    inventory: 100,
    type: 'protein',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-TOFU.png'
  })

  const fishProtein = await Ingredient.create({
    title: 'salmon sashimi',
    description: 'fresh salmon slices',
    price: '2.00',
    inventory: 100,
    type: 'protein',
    imageUrl:
      'https://media.istockphoto.com/photos/thinly-sliced-fresh-salmon-arranged-on-white-background-picture-id179232060?k=6&m=179232060&s=612x612&w=0&h=DOXSC9YjSvPJFSIPIWfKvrzafOepAvYVJegdXELwXlM='
  })

  const beefProtein = await Ingredient.create({
    title: 'ground beef',
    description: 'red ground beef made with our secret sauce',
    price: '2.00',
    inventory: 100,
    type: 'protein',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-RED-BEEF.png'
  })

  const kamabokoTopping = await Ingredient.create({
    title: 'kamaboko',
    description:
      'a type of cured surimi, a processed seafood product common in Japanese cuisine.',
    price: '1.00',
    inventory: 100,
    type: 'toppings'
  })

  const scallionsTopping = await Ingredient.create({
    title: 'scallions',
    description:
      'When freshly sprinkled on top of ramen, scallions give off an invigorating natural aroma that compliments the deep richness of the soup base.',
    price: '1.00',
    inventory: 100,
    type: 'toppings'
  })

  const menmaTopping = await Ingredient.create({
    title: 'menma',
    description:
      'a Japanese condiment made from lactate-fermented bamboo shoots. The bamboo shoots are dried in the sun or through other means before the process of fermentation.',
    price: '1.00',
    inventory: 100,
    type: 'toppings'
  })

  const beansSproutsTopping = await Ingredient.create({
    title: 'beans sprouts',
    description:
      'When dipped into the soup they absorb the flavor of the ramen.',
    price: '1.00',
    inventory: 100,
    type: 'toppings'
  })

  const cornTopping = await Ingredient.create({
    title: 'corn',
    description:
      'Corn adds a full, robust flavor when soaked into any ramen broth.',
    price: '1.00',
    inventory: 100,
    type: 'toppings'
  })

  const butterTopping = await Ingredient.create({
    title: 'butter',
    description:
      'Adding butter to the ramen might be one of the most delicious sins ever committed, because it makes ramen soup even creamier. With just a touch of butter, ramen becomes a delectable stew.',
    price: '1.00',
    inventory: 100,
    type: 'toppings'
  })

  //creating categories
  const nonDairy = await Category.create({name: 'non-dairy'})
  const noFish = await Category.create({name: 'no-fish'})
  const nonSpicy = await Category.create({name: 'non-spicy'})
  const soyFree = await Category.create({name: 'soy-free'})
  const glutenFree = await Category.create({name: 'gluten-free'})
  const vegetarian = await Category.create({name: 'vegetarian'})
  console.log(`seeded successfully`)

  //fakeBowl
  const fakeBowl = await Bowl.create()

  //fakeUser
  const fakeUser = await User.create({
    email: 'cody@email.com',
    userType: 'admin',
    password: 'iamapug'
  })

  //fakeOrder
  const fakeOrder = await Order.create({isCart: false})

  //fakeReview

  const fakeReview = await Review.create({
    title: 'It was AMAZING!!!',
    rating: 5,
    content: 'It was the best meal I have ever had in my entire life.'
  })

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
    ]),
    await TonkotsuBroth.addCategory([
      soyFree,
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree
    ]),
    await MisoBroth.addCategory([
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree,
      vegetarian
    ]),
    await SpicyBroth.addCategory([
      soyFree,
      nonDairy,
      noFish,
      glutenFree,
      vegetarian
    ]),
    await SobaNoodles.addCategory([
      soyFree,
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree,
      vegetarian
    ]),
    await RamenNoodles.addCategory([
      soyFree,
      nonSpicy,
      nonDairy,
      noFish,
      vegetarian
    ]),
    await GlutenFreeNoodles.addCategory([
      soyFree,
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree,
      vegetarian
    ]),
    await chickenProtein.addCategory([
      soyFree,
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree
    ]),
    await beefProtein.addCategory([
      soyFree,
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree
    ]),
    await tofuProtein.addCategory([
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree,
      vegetarian
    ]),
    await fishProtein.addCategory([nonSpicy, nonDairy, glutenFree, soyFree]),
    await kamabokoTopping.addCategory([
      nonSpicy,
      nonDairy,
      glutenFree,
      soyFree
    ]),
    await scallionsTopping.addCategory([
      soyFree,
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree,
      vegetarian
    ]),
    await menmaTopping.addCategory([
      soyFree,
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree,
      vegetarian
    ]),
    await beansSproutsTopping.addCategory([
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree,
      vegetarian
    ]),
    await cornTopping.addCategory([
      soyFree,
      nonSpicy,
      nonDairy,
      noFish,
      glutenFree,
      vegetarian
    ]),
    await butterTopping.addCategory([soyFree, nonSpicy, noFish, glutenFree])
  ])

  //add ingredients to fakebowl
  await fakeBowl.addIngredients([1, 6, 11, 14, 20])
  //add bowl to order
  await fakeOrder.addBowls(fakeBowl)
  //add order to user
  await fakeUser.addOrders(fakeOrder)
  //add review to user
  await fakeUser.addReviews(fakeReview)
  await fakeBowl.setPrice()
  await fakeOrder.getPrice()

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
