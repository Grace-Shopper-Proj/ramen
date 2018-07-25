import React from 'react'

export default function SingleSelectionForm(props) {
  const {type, allIngredients, selectedRestrictions, updateSelection} = props
  const handleIngredientChange = event => {
    // Identify the selected ingredient object
    const selectedIngredient = allIngredients.find(
      ingredient => ingredient.id === +event.target.name
    )
    updateSelection(selectedIngredient)
  }
  const filteredIngredients = allIngredients
    .filter(ingredient => ingredient.type === type)
    .filter(ingredient => {
      for (let i = 0; i < ingredient.category.length; i++) {
        if (selectedRestrictions.find(ingredient.category[i].name) > -1) {
          return true
        }
      }
    })
  return (
    <div>
      {filteredIngredients.map(ingredient => (
        <div
          key={ingredient.id}
          name={ingredient.id}
          onClick={handleIngredientChange}
        >
          <h3>{ingredient.name}</h3>
        </div>
      ))}
    </div>
  )
}

// OLD CODE
//
// class SingleSelectionForm extends Component {
//   handleIngredientChange = event => {
//     // Identify the selected ingredient object
//     const selectedIngredient = this.props.allIngredients.find(
//       ingredient => ingredient.id === +event.target.name
//     )
//     // Dispatch change-ingredient action
//     if (this.props.type === 'broth') {
//       this.props.selectBroth(selectedIngredient)
//     } else if (this.props.type === 'noodles') {
//       this.props.selectNoodles(selectedIngredient)
//     } else if (this.props.type === 'protein') {
//       this.props.selectProtein(selectProtein(selectedIngredient))
//     }
//   }
//   render () {
//     const {allIngredients, restrictions, type} = this.props
//     const filteredIngredients = allIngredients
//       .filter(ingredient => ingredient.type === type)
//       .filter(ingredient => {
//         for (let i = 0; i < ingredient.category.length; i++) {
//           if (restrictions.find(ingredient.category[i].name) > -1) {
//             return true
//           }
//         }
//       })
//     return (
//       <div>
//         {filteredIngredients.map(ingredient => (
//           <div key={ingredient.id}
//             name={ingredient.id}
//             onClick={this.handleIngredientChange}
//             >
//             <h3>{ingredient.name}</h3>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

// const mapState = (state, ownProps) => ({
//   // get all ingredients and selected restrictions from store
//   allIngredients: state.allIngredients,
//   restrictions: state.selectedRestriction,
//   // get ingredient type from ownProps (from OrderPage)
//   type: ownProps.type
// })

// const mapDispatch = dispatch => ({
//   // get action creators to dispatch select-ingredient actions
//   selectBroth: brothObj => dispatch(selectBroth(brothObj)),
//   selectNoodles: noodlesObj => dispatch(selectNoodles(noodlesObj)),
//   selectProtein: proteinObj => dispatch(selectProtein(proteinObj))
// })

// export default connect(mapState, mapDispatch)(SingleSelectionForm)
