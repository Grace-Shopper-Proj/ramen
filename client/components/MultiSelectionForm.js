import React from 'react'

export default function MultiSelectionForm(props) {
  const {
    allIngredients,
    selectedRestrictions,
    selectedToppings,
    updateSelection
  } = props
  let toppings = allIngredients.filter(
    ingredient => ingredient.type === 'toppings'
  )
  if (selectedRestrictions.length > 0) {
    toppings = toppings.filter(topping => {
      for (let i = 0; i < selectedRestrictions.length; i++) {
        let match = topping.category.find(
          elem => elem.name === selectedRestrictions[i].name
        )
        if (!match) break
        if (i === selectedRestrictions.length - 1) {
          return true
        }
      }
      return false
    })
  }
  const handleToppingsChange = event => {
    const toppingToChng = toppings.find(
      topping => topping.title === event.target.name
    )
    let newToppings
    if (event.target.checked) {
      newToppings = [...selectedToppings, toppingToChng]
    } else {
      newToppings = selectedToppings.filter(
        item => item.title !== event.target.name
      )
    }
    updateSelection(newToppings)
  }
  return (
    <div>
      {/* Generate the checkboxes for toppings */}
      {toppings.map(topping => {
        return (
          <div key={topping.id} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              name={topping.title}
              onChange={evt => handleToppingsChange(evt)}
            />
            <label
              className="form-check-label"
              form="inlineCheckbox1"
              htmlFor={topping.title}
            >
              {topping.title}
            </label>
          </div>
        )
      })}
    </div>
  )
}
