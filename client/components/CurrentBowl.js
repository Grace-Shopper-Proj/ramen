import React from 'react'
export default function CurrentBowl(props) {
  const currentBowl = props.currentBowl
  return (
    <div>
      <h1>Your Ramen Bowl</h1>
      <h4>Broth</h4>
      {currentBowl.selectedBroth.id
        ? `${currentBowl.selectedBroth.title}   \$ ${
            currentBowl.selectedBroth.price
          } `
        : 'Please select a broth'}
      <h4>Noodles</h4>
      {currentBowl.selectedNoodles.id
        ? `${currentBowl.selectedNoodles.title}   \$ ${
            currentBowl.selectedNoodles.price
          } `
        : 'Please select a noodles'}
      <h4>Protein</h4>
      {currentBowl.selectedProtein.id
        ? `${currentBowl.selectedProtein.title}   \$ ${
            currentBowl.selectedProtein.price
          } `
        : 'Please select a protein'}
      <h4>Toppings</h4>
      <ul>
        {currentBowl.selectedToppings.map(topping => (
          <li key={topping.id}>
            {topping.title} $ {topping.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
