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
    console.log('old restrictions', selectedRestrictions)
    console.log('new set of restrictions', newRestrictions)
    updateRestrictions(newRestrictions)
  }
  return (
    <form>
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
    </form>
  )
}

// OLD CODE
//
// export default class DietaryRestrictionForm extends Component {
//   handleRestrictionChange = event => {
//     // Dispatch change restriction action
//     const {restrictions, selectedRestrictions, select} = this.props
//     const restrictionToChng = restrictions.find(
//       restriction => restriction.name === event.target.name
//     )
//     let newRestrictions
//     if (event.target.checked) {
//       newRestrictions = [...selectedRestrictions, restrictionToChng]
//     } else {
//       const restrictionToRmIdx = restrictions.indexOf(restrictionToChng)
//       newRestrictions = selectedRestrictions.slice(restrictionToRmIdx, 1)
//     }
//     select(newRestrictions)
//   }
//   render () {
//     const {restrictions} = this.props
//     return (
//       <form>
//         {/* Generate the checkboxes for dietary restrictions */}
//         {restrictions.map(restriction => {
//           return (
//             <div key={restriction.id}>
//               <label htmlFor={restriction.name}>{restriction.name}</label>
//               <input
//                 type="checkbox"
//                 name={restriction.name}
//                 checked={this.state.restrictions}
//                 onChange={this.handleRestrictionChange}
//               />
//             </div>
//           )
//         })}
//       </form>
//     )
//   }
// }

// const mapState = state => ({
//   restrictions: state.allRestrictions,
//   selectedRestrictions: state.selectedRestrictions
// })

// const mapDispatch = dispatch => ({
//   // action creater to select restrictions
//   select: restArr => dispatch(selectRestrictions(restArr))
// })

// export default connect(mapState, mapDispatch)(DietaryRestrictionForm)
