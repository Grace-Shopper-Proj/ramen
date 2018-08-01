import React from 'react'
export default function CurrentBowl(props) {
  const currentBowl = props.currentBowl
  let toppingsPrice = currentBowl.selectedToppings.reduce(
    (totalPrice, currentTopping) => totalPrice + Number(currentTopping.price),
    0
  )
  let currentPrice = (
    (Number(currentBowl.selectedBroth.price) || 0) +
    (Number(currentBowl.selectedNoodles.price) || 0) +
    (Number(currentBowl.selectedProtein.price) || 0) +
    (toppingsPrice || 0)
  ).toFixed(2)
  return (
    <div className="card" id="currentBowl">
      <h2>Your Current Ramen Bowl</h2>
      <div className="card-Body">
        <h5>Broth</h5>
        <p>
          {currentBowl.selectedBroth.id
            ? `${currentBowl.selectedBroth.title}   \$ ${
                currentBowl.selectedBroth.price
              } `
            : 'Please select a broth'}
        </p>
        <h5>Noodles</h5>
        <p>
          {currentBowl.selectedNoodles.id
            ? `${currentBowl.selectedNoodles.title}   \$ ${
                currentBowl.selectedNoodles.price
              } `
            : 'Please select a noodle'}
        </p>
        <h5>Protein</h5>
        <p>
          {currentBowl.selectedProtein.id
            ? `${currentBowl.selectedProtein.title}   \$ ${
                currentBowl.selectedProtein.price
              } `
            : 'Please select a protein'}
        </p>
        <h5>Toppings</h5>
        <p>
          <ul>
            {currentBowl.selectedToppings.map(topping => (
              <li key={topping.id}>
                {topping.title} $ {topping.price}
              </li>
            ))}
          </ul>
        </p>
        <h5>Total Price: </h5>
        <p>${currentPrice}</p>
        <button
          className="btn"
          type="submit"
          disabled={
            !currentBowl.selectedBroth ||
            !currentBowl.selectedNoodles ||
            !currentBowl.selectedProtein
          }
          onClick={props.submitBowl}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}
