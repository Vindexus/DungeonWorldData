module.exports = {
  name: 'Wizard',
  description: `Dungeon World has rules. Not the laws of men or the rule of some petty tyrant. Bigger, better rules. You drop something—it falls. You can’t make something out of nothing. The dead stay dead, right?

Oh, the things we tell ourselves to feel better about the long, dark nights.

You’ve spent so very long poring over those tomes of yours. The experiments that nearly drove you mad and all the botched summonings that endangered your very soul. For what? For power. What else is there? Not just the power of King or Country but the power to boil a man’s blood in his veins. To call on the thunder of the sky and the churn of the roiling earth. To shrug off the rules the world holds so dear.

Let them cast their sidelong glances. Let them call you “warlock” or “diabolist.” Who among them can hurl fireballs from their eyes?

Yeah. We didn’t think so.`,
  load: 9,
  base_hp: 4,
  damage: 'd4',
  names: {
    elf: 'Galadiir, Fenfaril, Lilliastre, Phirosalle, Enkirash, Halwyr'.split(', '),
    human: 'Avon, Morgan, Rath, Ysolde, Ovid, Vitus, Aldara, Xeno, Uri'.split(', ')
  },
  bonds: [
    '{{blank}} will play an important role in the events to come. I have foreseen it!',
    '{{blank}} is keeping an important secret from me.',
    '{{blank}} is woefully misinformed about the world; I will teach them all that I can.'
  ],
  looks: [
    ['Haunted Eyes', 'Sharp Eyes', 'Crazy Eyes'],
    ['Styled Hair', 'Wild Hair', 'Pointed Hat'],
    ['Worn Robes', 'Stylish Robes', 'Strange Robes'],
    ['Pudgy Body', 'Creepy Body', 'Thin Body']
  ],
  alignments: {
    good: {
      name: 'Good',
      description: 'Use magic to directly aid another.'
    },
    neutral: {
      name: 'Neutral',
      description: 'Discover something about a magical mystery.'
    },
    evil: {
      name: 'Evil',
      description: 'Use magic to cause terror and fear.'
    }
  },
  alignments_list: {
    points_to: 'classes.wizard.alignments',
    list: ['good', 'neutral', 'evil']
  },
  race_moves: {
    points_to: 'moves',
    list: ['wizard_elf', 'wizard_human']
  },
  starting_moves: {
    points_to: 'moves',
    list: ['spellbook', 'prepare_spells', 'cast_a_spell_int', 'ritual']
  },
  //TODO: Add advanced mvoes
  advanced_moves_1: {
    points_to: 'moves',
    list: ['prodigy','empowered_magic','fount_of_knowledge','know_it_all','expanded_spellbook','enchanter','logical','arcane_ward','counterspell','quick_study']
  },
  advanced_moves_2: {
    points_to: 'moves',
    list: ['quick_study','master','greater_empowered_magic','enchanters_soul','highly_logical','arcane_armor','protective_counter','ethereal_tether','mystical_puppet_strings','spell_augmentation','self_powered']
  }
}