const broth = [
  {
    title: 'pork broth',
    description: 'warm, porky flavor',
    price: '3.50',
    inventory: 100,
    tags: ['meat'],
    type: 'broth',
    imageUrl:
      'https://thevikingchef.files.wordpress.com/2011/03/miso_ramen_broth.jpg'
  },
  {
    title: 'chicken broth',
    description: 'warm, chicken flavor',
    price: '3.50',
    inventory: 100,
    tags: ['meat'],
    type: 'broth',
    imageUrl:
      'https://thevikingchef.files.wordpress.com/2011/03/miso_ramen_broth.jpg'
  },
  {
    title: 'vegetarian broth',
    description: 'warm, vegetable flavor',
    price: '3.50',
    inventory: 100,
    tags: ['vegetarian'],
    type: 'broth',
    imageUrl:
      'https://thevikingchef.files.wordpress.com/2011/03/miso_ramen_broth.jpg'
  },
  {
    title: 'spicy broth',
    description: 'warm, spicy flavor',
    price: '3.50',
    inventory: 100,
    tags: ['spicy'],
    type: 'broth',
    imageUrl:
      'https://thevikingchef.files.wordpress.com/2011/03/miso_ramen_broth.jpg'
  }
]

const noodles = [
  {
    title: 'udon',
    description: 'thick, chewy',
    price: '3.50',
    inventory: 100,
    tags: ['vegetarian'],
    type: 'noodles',
    imageUrl:
      'https://www.joyofkosher.com/.image/t_share/MTQxMDI1NTAyNjg4MjU3NjEw/homemade-ramen-noodles-step-7jpg.jpg'
  },
  {
    title: 'gluten-free noodles',
    description: 'thin, gluten-free',
    price: '3.50',
    inventory: 100,
    tags: ['gluten-free', 'vegetarian'],
    type: 'noodles',
    imageUrl:
      'https://www.joyofkosher.com/.image/t_share/MTQxMDI1NTAyNjg4MjU3NjEw/homemade-ramen-noodles-step-7jpg.jpg'
  }
]

const toppings = [
  {
    title: 'nori',
    description: 'crunchy seaweed',
    price: '1.00',
    inventory: 100,
    tags: ['vegetarian', 'gluten-free'],
    type: 'toppings',
    imageUrl:
      'http://www.doradaily.com/wp-content/uploads/2014/03/seaweadsnacks7.jpg'
  },
  {
    title: 'garlic flakes',
    description: 'thin, gluten-free',
    price: '3.50',
    inventory: 100,
    tags: ['gluten-free', 'vegetarian', 'spicy'],
    type: 'noodles',
    imageUrl:
      'https://iegvu.agribusinessintelligence.informa.com/-/media/agri-article-media/stock-images/processed-commodities/spices-exotics-oils/garlic/dried_garlic_flakes_in_scoop_614644241_1200px.jpg'
  }
]

const proteins = [
  {
    title: 'pork',
    description: 'pork belly',
    price: '2.00',
    inventory: 100,
    tags: ['meat', 'gluten-free'],
    type: 'protein',
    imageUrl:
      'http://www.anniesfoodblog.com/wp-content/uploads/2015/06/Chasupork3.jpg'
  },
  {
    title: 'chicken',
    description: 'chicken breast',
    price: '2.00',
    inventory: 100,
    tags: ['gluten-free', 'meat'],
    type: 'protein',
    imageUrl:
      'https://www.goldnplump.com/sites/default/files/GNP_%20Sesame_Ginger_Chicken_Ramen_Soup.jpg'
  }
]
module.exports = {broth, noodles, toppings, proteins}
