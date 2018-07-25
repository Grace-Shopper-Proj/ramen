import React, {Component} from 'react'

export default function singleIngredient(props) {
  const {ingredient} = props
  // const ingredient = {
  //   id: 1,
  //   title: 'Shio',
  //   description:
  //     'A clear and saltier soup base made with chicken, vegetables and salt. It is the oldest of the ramen broth. ',
  //   price: '3.50',
  //   inventory: 2,
  //   type: 'broth',
  //   imageUrl:
  //     'https://i.pinimg.com/originals/d2/b2/09/d2b20921e8cf9b504e7d897ae6595aae.jpg',
  //   createdAt: '2018-07-25T19:19:26.346Z',
  //   updatedAt: '2018-07-25T19:19:26.346Z',
  //   category: [
  //     {
  //       id: 3,
  //       name: 'non-spicy'
  //     },
  //     {
  //       id: 1,
  //       name: 'non-dairy'
  //     },
  //     {
  //       id: 2,
  //       name: 'no-fish'
  //     },
  //     {
  //       id: 4,
  //       name: 'soy-free'
  //     },
  //     {
  //       id: 5,
  //       name: 'gluten-free'
  //     }
  //   ]
  // }

  return (
    <div>
      <h2>
        {ingredient.title} ({ingredient.type})
      </h2>
      <img src={ingredient.imageUrl} />

      <p>{ingredient.description}</p>
      {ingredient.inventory < 1 ? (
        <p>Out of Stock</p>
      ) : (
        <p>${ingredient.price}</p>
      )}
      <h4>Category</h4>
      <ul>
        {ingredient.category.map(cat => <li key={cat.id}>{cat.name}</li>)}
      </ul>
    </div>
  )
}
