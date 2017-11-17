var spells = {
  light: {
    level: 'cantrip',
    description: 'An item you touch glows with arcane light, about as bright as a torch. It gives off no heat or sound and requires no fuel, but it is otherwise like a mundane torch. You have complete control of the color of the flame. The spell lasts as long as it is in your presence.'
  },
  prestidigitation: {
    level: 'cantrip',
    description: ''
  },
  unseen_servant: {
    level: 'cantrip',
    description: ''
  },
  contact_spirits: {
    level: 'cantrip',
    description: '',
    tags: ['summoning']
  },
  detect_magic: {
    level: 1,
    description: 'One of your senses is briefly attuned to magic. The GM will tell you what here is magical.',
    tags: ['divination']
  },
  telepathy: {
    level: 1,
    description: '',
    tags: ['divination', 'ongoing']
  },
  charm_person: {
    level: 1,
    description: ''
  },
  invisibility: {
    level: 1,
    description: ''
  },
  magic_missile: {
    level: 1,
    description: ''
  },
  alarm: {
    level: 1,
    description: ''
  },
  dispel_magic: {
    level: 3,
    description: ''
  },
  visions_through_time: {
    level: 3,
    description: ''
  }
}

module.exports = spells;