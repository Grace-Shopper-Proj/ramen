const broth = [
  {
    title: 'Shio',
    description:
      'A clear and saltier soup base made with chicken, vegetables and salt. It is the oldest of the ramen broth. ',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl:
      'https://i.pinimg.com/originals/d2/b2/09/d2b20921e8cf9b504e7d897ae6595aae.jpg'
  },
  {
    title: 'Tonkotsu',
    description:
      'A thick, cloudy white, and hearty broth made with pork boiled for 12-15 hours.',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl: 'https://truffle-assets.imgix.net/888fce8e-ramentime3.png'
  },
  {
    title: 'Miso',
    description:
      'A sweet, nutty, and creamy soup base made with fermented soy beans',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl:
      'https://thevikingchef.files.wordpress.com/2011/03/miso_ramen_broth.jpg'
  },
  {
    title: 'Shoyu',
    description:
      'A tangy-flavored, clear, brown broth made with vegetable and soy souce',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl: 'https://truffle-assets.imgix.net/9a72cc13-ramentime6.png'
  },
  {
    title: 'Spicy',
    description:
      'A spicy and flaverful broth made with vegetables and our secret sauce. Very popular!',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl:
      'https://media-cdn.tripadvisor.com/media/photo-s/0d/3c/6d/e3/spicy-pork-ramen.jpg'
  }
]

const noodles = [
  {
    title: 'Udon',
    description: 'thick, chewy',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'http://kandscorporation.com/wp-content/uploads/2017/02/order-noodles-1848952632.png'
  },
  {
    title: 'Soba',
    description:
      'A brown, densed-texture, flavorful noodle, made with buckwheat. The healthiest choice of noodle, gluten-free.',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'https://www.citysuper.com.hk/getmedia/ab49c8cb-3e11-4abc-8559-aa1cf1f0554d/cold-warm-sake-09.png.aspx?width=475&height=300&ext=.png'
  },
  {
    title: 'Curly noodle',
    description: 'yellow, made with wheat and eggs.',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-EXTRA-NOODLE-2.png'
  },
  {
    title: 'Ramen',
    description: 'A thin wheat noodle, goes with variety of flavor.',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-EXTRA-NOODLE-1.png'
  },
  {
    title: 'Gluten-free noodle',
    description: 'chewy, gluten-free.',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-EXTRA-NOODLE-3.png'
  }
]

const toppings = [
  {
    title: 'nori',
    description: 'crunchy seaweed',
    price: '1.00',
    inventory: 100,
    type: 'toppings',
    imageUrl:
      'https://www.superfoodevolution.com/images/nori-flakes-8oz-live-superfoods.png'
  },
  {
    title: 'soft-boiled egg',
    description: 'egg that is soft-boiled and cutted a half',
    price: '1.00',
    inventory: 100,
    type: 'toppings',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-EGG.png'
  }
]

const proteins = [
  {
    title: 'pork',
    description: 'pork belly',
    price: '2.00',
    inventory: 100,
    type: 'protein',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-PORK.png'
  },
  {
    title: 'chicken',
    description: 'Slices of tender marinated chicken breast.',
    price: '2.00',
    inventory: 100,
    type: 'protein',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-CHICKEN.png'
  },
  {
    title: 'organic tofu',
    description: 'tofu slices',
    price: '2.00',
    inventory: 100,
    type: 'protein',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-TOFU.png'
  },
  {
    title: 'ground beef',
    description: 'red ground beef made with our secret sauce',
    price: '2.00',
    inventory: 100,
    type: 'protein',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-RED-BEEF.png'
  }
]
module.exports = {broth, noodles, toppings, proteins}
