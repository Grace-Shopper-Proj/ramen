import React from 'react'
export default function CurrentBowl(props) {
  const currentBowl = props.currentBowl
  return (
    <div>
      <h1>Your Ramen Bowl</h1>
      <h4>Broth</h4>
      {currentBowl.selectedBroth.title}
      <h4>Noodles</h4>
      {currentBowl.selectedNoodles.title}
      <h4>Protein</h4>
      {currentBowl.selectedProtein.title}
      <h4>Toppings</h4>
    </div>
  )
}
