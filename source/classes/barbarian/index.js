module.exports = {
  key: 'barbarian',
  name: 'Barbarian',
  description: '',
  base_hp: 8,
  load: 8,
  damage: 'd10',
  looks: [
    ['Tormented eyes', 'Haunted eyes, Wild eyes', 'Shrouded eyes'],
    ['Mighty thews', 'Long shanks, Scrawny body', 'Supple body'],
    ['Strange tattoos', 'Unusual jewelry', 'Unmarred by decoration'],
    ['Scraps, Silks', 'Scavenger’s outfit', 'Weather inappropriate clothes']
  ],
  starting_moves: {
    points_to: 'moves',
    list: ['herculean_appetites']
  },
  advanced_moves_1: {
    points_to: 'moves',
    list: ['smash']
  }
}