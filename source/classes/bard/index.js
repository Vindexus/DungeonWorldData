module.exports = {
  name: 'Bard',
  description: "The poems say an adventurer’s life is all open roads and the glory of coin and combat. The tales told in every farmhand-filled inn have to have some ring of truth to them, don’t they? The songs to inspire peasantry and royals alike—to soothe the savage beast or drive men to a frenzy—have to come from somewhere.\n\nEnter the bard. You, with your smooth tongue and quick wit. You teller-of-tales and singer-of-songs. It takes a mere minstrel to retell a thing but a true bard to live it. Strap on your boots, noble orator. Sharpen that hidden dagger and take up the call. Someone’s got to be there, fighting shoulder-to-shoulder with the goons and the thugs and the soon-to-be-heroes. Who better than you to write the tale of your own heroism?\n\nNobody. Get going.",
  load: 9,
  max_hp: 6,
  damage: 'd6',
  names: {
    elf: 'Astrafel, Daelwyn, Feliana, Damarra, Sistranalle, Pendrell, Melliandre, Dagoliir'.split(', '),
    human: 'Baldric, Leena, Dunwick, Willem, Edwyn, Florian, Seraphine, Quorra, Charlotte, Lily, Ramonde, Cassandra'.split(', ')
  },
  bonds: [
    'This is not my first adventure with {{blank}}.', 
    'I sang stories of {{blank}} long before I ever met them in person.', 
    '{{blank}} is often the butt of my jokes.', 
    'I am writing a ballad about the adventures of {{blank}}.',
    '{{blank}} trusted me with a secret.',
    '{{blank}} does not trust me, and for good reason.'
  ],
  //TODO: Array of arrays
  looks: ['Knowing Eyes, Fiery Eyes, or Joyous Eyes', 'Fancy Hair, Wild Hair, or Stylish Cap', 'Finery, Traveling Clothes, or Poor Clothes', 'Fit Body, Well-fed Body, or Thin Body'],
  race_moves: {
    points_to: 'moves',
    list: ['bard_elf', 'bard_human']
  },
  starting_moves: {
    points_to: 'moves',
    list: ['arcane_art', 'bardic_lore', 'charming_and_open', 'a_port_in_the_storm']
  },
  advanced_moves_1: {
    points_to: 'moves',
    list: ['healing_song', 'vicious_cacophony']
  },
  advanced_moves_2: {
    points_to: 'moves',
    list: ['arcane_art']
  }
}