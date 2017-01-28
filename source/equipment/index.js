var helpers = require('../../lib/source_helper')

var items = {
  /* Weapons */
  ragged_bow: {
    tags: ['near', '15 coins', '2 weight']
  },
  fine_bow: {
    tags: ['near', 'far', '60 coins', '2 weight']
  },
  crossbow: {
    tags: ['near', '+1 damage', 'reload', '35 coins', '3 weight']
  },
  bundle_of_arrows: {
    name: 'Bundle of Arrows',
    tags: ['3 ammo', '1 coin', '1 weight']
  },
  elven_arrows: {
    tags: ['4 ammo', '20 coins', '1 weight']
  },
  club_shillelagh: {
    name: 'Club, Shillelagh',
    tags: ['close', '1 coin', '1 weight']
  },
  staff: {
    tags: ['close', 'two_handed', '1 coin', '1 weight']
  },
  dagger_shiv: {
    name: 'Dagger, Shiv',
    tags: ['hand', '2 coins', '1 weight']
  },
  throwing_dagger: {
    tags: ['thrown', 'near', '1 coin', '0 weight']
  },
  short_sword_axe_warhammer_mace: {
    name: 'Short Sword, Axe, Warhammer, Mace',
    tags: ['close', '8 coins', '1 weight']
  },
  spear: {
    tags: ['reach', 'thrown', 'near', '5 coins', '1 weight']
  },
  long_sword_battle_axe_flail: {
    name: 'Long Sword, Battle Axe, Flail',
    tags: ['close', '+1 damage', '15 coins', '2 weight']
  },
  halberd: {
    tags: ['reach', '+1 damage', 'two-handed', '9 coins', '2 weight']
  },
  rapier: {
    tags: ['close', 'precise', '25 coins', '1 weight']
  },
  dueling_rapier: {
    tags: ['close', '1 piercing', 'precise', '50 coins', '2 weight']
  },

  /* Armor */
  leather_chainmail: {
    name: 'Leather, Chainmail',
    tags: ['1 armor', 'worn', '10 coins', '1 weight']
  },
  scale_mail: {
    tags: ['2 armor', 'worn', 'clumsy', '50 coins', '3 weight']
  },
  plate: {
    tags: ['3 armor', 'worn', 'clumsy', '350 coins', '4 weight']
  },
  shield: {
    tags: ['+1 armor', '15 coins', '2 weight']
  },

  /* Dungeon Gear */
  adventuring_gear: {
    tags: ['5 uses', '20 coins', '1 weight'],
    description: 'Adventuring gear is a collection of useful mundane items such as chalk, poles, spikes, ropes, etc. When you rummage through your adventuring gear for some useful mundane item, you find what you need and mark off a use.'
  },
  bandages: {
    tags: ['3 uses', 'slow', '5 coins', '0 weight'],
    description: 'When you have a few minutes to bandage someone else’s wounds, heal them of 4 damage and expend a use.'
  },
  poultices_and_herbs: {
    tags: ['2 uses', 'slow', '10 coins', '1 weight'],
    description: 'When you carefully treat someone’s wounds with poultices and herbs, heal them of 7 damage and expend a use.'
  },
  healing_potion: {
    tags: ['50 coins', '0 weight'],
    description: 'When you drink an entire healing potion, heal yourself of 10 damage or remove one debility, your choice.'
  },
  keg_of_dwarven_stout: {
    description: 'When you open a keg of dwarven stout and let everyone drink freely, take +1 to your Carouse roll. If you drink a whole keg yourself, you are very, very drunk.',
    tags: ['10 coins', '4 weight']
  },
  bag_of_books: {
    tags: ['5 uses', '10 coins', '2 weight'],
    description: 'When your bag of books contains just the right book for the subject you’re spouting lore on, consult the book, mark off a use, and take +1 to your roll.'
  },
  antitoxin: {
    tags: ['10 coins', '0 weight'],
    description: 'When you drink antitoxin, you’re cured of one poison affecting you.'
  },
  dungeon_rations: {
    tags: ['ration', '5 uses', '3 coins', '1 weight'],
    description: 'Not tasty, but not bad either.'
  },
  personal_feast: {
    tags: ['ration', '1 use', '10 coins', '1 weight'],
    description: 'Ostentatious to say the least.'
  },
  dwarven_hardtack: {
    tags: ['requires Dwarf', 'ration', '7 uses', '3 coins', '1 weight'],
    description: 'Dwarves say it tastes like home. Everyone else says it tastes like home, if home is a hog farm, and on fire.'
  },
  elven_bread: {
    tags: ['ration', '7 uses', '10 coins', '1 weight'],
    description: 'Only the greatest of elf-friends are treated to this rare delicacy.'
  },
  halfling_pipeleaf: {
    tags: ['6 uses', '5 coins', '0 weight'],
    description: "When you share halfling pipeleaf with someone, expend two uses and take +1 forward to {{move 'parley'}} with them."
  },

  oil_of_tagit: {
    tags: ['dangerous', 'applied', '15 coins', '0 weight'],
    description: 'The target falls into a light sleep.'
  },
  bloodweed: {
    tags: ['dangerous', 'touch', '12 couns', '0 weight'],
    description: 'Until cured, whenever the afflicted rolls damage, they roll an additional d4 and subtract that result from their normal damage.'
  },
  goldenroot: {
    tags: ['dangerous', 'applied', '20 coins', '0 weight'],
    description: 'The target treats the next creature they see as a trusted ally, until proved otherwise.'
  },
  serpents_tears: {
    name: "Serpent's Teats",
    tags: ['dangerous', 'touch', '10 coins', '0 weight'],
    description: 'Anyone dealing damage against the target rolls twice and takes the better result.'
  },

  /* Magic Items */
  vorpal_sword: {
    description: 'Snicker-snack and all that. Sharp as anything, this simple-seeming sword means to separate one thing from another—the limb from the body or folk from their lives. When you deal damage with the Vorpal Sword, your enemy must choose something (an item, an advantage, a limb) and lose it, permanently.',
    tags: ['close', '3 piercing', '2 weight']
  }
}

for(var key in items) {
  items[key].name = items[key].name || helpers.keyToName(key)
}

module.exports = items
/*
Fine Bow; near, far, 60 coins, 2 weight
Hunter’s Bow; near, far, 100 coins, 1 weight
Crossbow; near, +1 damage, reload, 35 coins, 3 weight
Bundle of Arrows; 3 ammo, 1 coin, 1 weight
Elven Arrows; 4 ammo, 20 coins, 1 weight
Club, Shillelagh; close, 1 coin, 2 weight
Staff; close, two-handed, 1 coin, 1 weight
Dagger, Shiv, Knife; hand, 2 coins, 1 weight
Throwing Dagger; thrown, near, 1 coin, 0 weight
Short Sword, Axe, Warhammer, Mace; close, 8 coins, 1 weight
Spear; reach, thrown, near, 5 coins, 1 weight
Long Sword, Battle Axe, Flail; close, +1 damage, 15 coins, 2 weight
Halberd; reach, +1 damage, two-handed, 9 coins, 2 weight
Rapier; close, precise, 25 coins, 1 weight
Dueling Rapier; close, 1 piercing, precise, 50 coins, 2 weight
}
*/