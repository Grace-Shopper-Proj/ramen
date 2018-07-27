import React from 'react'
export default function CurrentBowl(props) {
  const currentBowl = props.currentBowl
  return (
    <div>
      <h1>Your Ramen Bowl</h1>
      <h4>Broth</h4>
      {currentBowl.selectedBroth.id
        ? currentBowl.selectedBroth.title
        : 'Please select a broth'}
      <h4>Noodles</h4>
      {currentBowl.selectedNoodles.id
        ? currentBowl.selectedNoodles.title
        : 'Please select a noodles'}
      <h4>Protein</h4>
      {currentBowl.selectedProtein.id
        ? currentBowl.selectedProtein.title
        : 'Please select a protein'}
      <h4>Toppings</h4>
      <ul>
        {currentBowl.selectedProtein.length
          ? currentBowl.selectedToppings.map(topping => (
              <li>{topping.title}</li>
            ))
          : 'Please select toppings if you want to'}
      </ul>
      <h4>{currentBowl.price}</h4>
    </div>
  )
}
