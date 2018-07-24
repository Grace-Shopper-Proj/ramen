'use strict'

const db = require('../server/db')
const {User, Ingredient} = require('../server/db/models')
const {broth, noodles, toppings, proteins} = require('../ingredients_data')

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const brothList = await Promise.all(
    broth.map(ingredient => {
      Ingredient.create(ingredient)
    })
  )

  const noodlesList = await Promise.all(
    noodles.map(ingredient => {
      Ingredient.create(ingredient)
    })
  )

  const toppingsList = await Promise.all(
    toppings.map(ingredient => {
      Ingredient.create(ingredient)
    })
  )

  const proteinsList = await Promise.all(
    proteins.map(ingredient => {
      Ingredient.create(ingredient)
    })
  )
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${brothList.length} broths`)
  console.log(`seeded ${toppingsList.length} toppingss`)
  console.log(`seeded ${proteinsList.length} proteins`)
  console.log(`seeded ${noodlesList.length} noodles`)
  console.log(`seeded successfully`)
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
