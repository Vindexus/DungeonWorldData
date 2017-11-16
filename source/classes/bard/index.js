module.exports = {
  name: 'Bard',
  description: "The poems say an adventurer’s life is all open roads and the glory of coin and combat. The tales told in every farmhand-filled inn have to have some ring of truth to them, don’t they? The songs to inspire peasantry and royals alike—to soothe the savage beast or drive men to a frenzy—have to come from somewhere.\n\nEnter the bard. You, with your smooth tongue and quick wit. You teller-of-tales and singer-of-songs. It takes a mere minstrel to retell a thing but a true bard to live it. Strap on your boots, noble orator. Sharpen that hidden dagger and take up the call. Someone’s got to be there, fighting shoulder-to-shoulder with the goons and the thugs and the soon-to-be-heroes. Who better than you to write the tale of your own heroism?\n\nNobody. Get going.",
  load: 9,
  base_hp: 6,
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
  looks: [
    ['Knowing Eyes', 'Fiery Eyes', 'Joyous Eyes'],
    ['Fancy Hair','Wild Hair','Stylish Cap'],
    ['Finery', 'Traveling Clothes', 'Poor Clothes'],
    ['Fit Body', 'Well-fed Body', 'Thin Body']
  ],
  alignments: {
    good: {
      name: 'Good',
      description: 'Perform your art to aid someone else.'
    },
    neutral: {
      name: 'Neutral',
      description: 'Avoid a conflict or defuse a tense situation.'
    },
    chaotic: {
      name: 'Chaotic',
      description: 'Spur others to significant and unplanned decisive action.'
    }
  },
  alignments_list: {
    points_to: 'classes.bard.alignments',
    list: ['good', 'neutral', 'chaotic']
  },
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
    list: ['healing_song', 'vicious_cacophony', 'it_goes_to_eleven', 'metal_hurlant', 'a_little_help_from_my_friends', 'eldritch_tones', 'duelists_parry', 'bamboozle', 'multiclass_dabbler', 'multiclass_initiate']
  },
  advanced_moves_2: {
    points_to: 'moves',
    list: ['healing_chorus', 'vicious_blast', 'unforgettable_face', 'reputation', 'eldritch_chord', 'an_ear_for_magic', 'devious', 'duelists_block', 'multiclass_master']
  },
  starting_gear: "You have {{item 'dungeon_rations' uppercase=true}}",
  gear_choices: [{
    label: 'Choose one instrument, all are 0 weight for you',
    list: [
      "Your father's mandolin, repaired",
      "A fine lute, a gift from a noble",
      "The pipes with which you courted your first love",
      "A stolen horn",
      "A fiddle, never before played",
      "A songbook in a forgotten tongue"
    ]
  }, {
    label: "Choose your clothing",
    list: [
      "{{item 'leather_armor' uppercase=true}}",
      "Ostentatious clothes (0 weight)"
    ]
  }, {
    label: "Choose your armament",
    list: [
      "{{item 'dueling_rapier' uppercase=true}}",
      "{{item 'ragged_bow' uppercase=true}}, {{item 'bundle_of_arrows'}}, and {{item 'short_sword'}}"
    ]
  }, {
    label: "Choose one",
    list: [
      "{{item 'adventuring_gear' uppercase=true}}",
      "{{item 'bandages' uppercase=true}}",
      "{{item 'halfling_pipeleaf' uppercase=true}}",
      "3 coins"
    ]
  }]
}