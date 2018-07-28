import React from 'react'

export default function DietaryRestrictionForm(props) {
  const {restrictions, selectedRestrictions, updateRestrictions} = props
  const handleRestrictionChange = event => {
    const restrictionToChng = restrictions.find(
      restriction => restriction.name === event.target.name
    )
    let newRestrictions
    if (event.target.checked) {
      newRestrictions = [...selectedRestrictions, restrictionToChng]
    } else {
      newRestrictions = selectedRestrictions.filter(
        item => item.name !== event.target.name
      )
    }
    updateRestrictions(newRestrictions)
  }
  return (
    <div>
      {/* Generate the checkboxes for dietary restrictions */}
      {restrictions.map(restriction => {
        return (
          <div key={restriction.id}>
            <label htmlFor={restriction.name}>{restriction.name}</label>
            <input
              type="checkbox"
              name={restriction.name}
              onChange={evt => handleRestrictionChange(evt)}
            />
          </div>
        )
      })}
    </div>
  )
}
