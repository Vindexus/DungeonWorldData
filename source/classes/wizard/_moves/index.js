module.exports = {
  "prodigy": {
    "name": "Prodigy",
    "key": "prodigy",
    "description": "Choose a spell. You prepare that spell as if it were one level lower."
  },
  "empowered_magic": {
    "name": "Empowered Magic",
    "key": "empowered_magic",
    "description": "When you {{move 'cast_a_spell_wizard'}}, on a 10+ you have the option of choosing from the 7-9 list. If you do, you may choose one of these as well:\nThe spell’s effects are maximized\n\nThe spell’s targets are doubled\n - The spell’s effects are maximized\n - The spell’s targets are doubled"
  },
  "fount_of_knowledge": {
    "name": "Fount of Knowledge",
    "key": "fount_of_knowledge",
    "description": "When you {{move 'spout_lore'}} about something no one else has any clue about, take +1."
  },
  "know_it_all": {
    "name": "Know-It-All",
    "key": "know_it_all",
    "description": "When another player’s character comes to you for advice and you tell them what you think is best, they get +1 forward when following your advice and you mark experience if they do."
  },
  "expanded_spellbook": {
    "name": "Expanded Spellbook",
    "key": "expanded_spellbook",
    "description": "Add a new spell from the spell list of any class to your spellbook."
  },
  "enchanter": {
    "name": "Enchanter",
    "key": "enchanter",
    "description": "When you have time and safety with a magic item you may ask the GM what it does, the GM will answer you truthfully."
  },
  "logical": {
    "name": "Logical",
    "key": "logical",
    "description": "When you use strict deduction to analyze your surroundings, you can {{move 'discern_realities'}} with INT instead of WIS."
  },
  "arcane_ward": {
    "name": "Arcane Ward",
    "key": "arcane_ward",
    "description": "As long as you have at least one prepared spell of first level or higher, you have +2 armor."
  },
  "counterspell": {
    "name": "Counterspell",
    "key": "counterspell",
    "description": "When you attempt to counter an arcane spell that will otherwise affect you, stake one of your prepared spells on the defense and roll+Int. ✴On a 10+, the spell is countered and has no effect on you. ✴On a 7-9, the spell is countered and you forget the spell you staked. Your counterspell protects only you; if the countered spell has other targets they get its effects."
  },
  "quick_study": {
    "name": "Quick Study",
    "key": "quick_study",
    "description": "When you see the effects of an arcane spell, ask the GM the name of the spell and its effects. You take +1 when acting on the answers."
  },
  "master": {
    "name": "Master",
    "key": "master",
    "requires": "prodigy",
    "description": "Choose one spell in addition to the one you picked for prodigy. You prepare that spell as if it were one level lower."
  },
  "greater_empowered_magic": {
    "name": "Greater Empowered Magic",
    "key": "greater_empowered_magic",
    "replaces": "empowered_magic",
    "description": "When you {{move 'cast_a_spell_wizard'}}, on a 10-11 you have the option of choosing from the 7-9 list. If you do, you may choose one of these effects as well. On a 12+ you get to choose one of these effects for free:\nThe spell’s effects are doubled\n\nThe spell’s targets are doubled\n - The spell’s effects are doubled\n - The spell’s targets are doubled"
  },
  "enchanters_soul": {
    "name": "Enchanter’s Soul",
    "key": "enchanters_soul",
    "requires": "enchanter",
    "description": "When you have time and safety with a magic item in a place of power you can empower that item so that the next time you use it its effects are amplified, the GM will tell you exactly how."
  },
  "highly_logical": {
    "name": "Highly Logical",
    "key": "highly_logical",
    "replaces": "logical",
    "description": "When you use strict deduction to analyze your surroundings, you can {{move 'discern_realities'}} with Int instead of Wis. On a 12+ you get to ask the GM any three questions, not limited by the list."
  },
  "arcane_armor": {
    "name": "Arcane Armor",
    "key": "arcane_armor",
    "replaces": "arcane_ward",
    "description": "As long as you have at least one prepared spell of first level or higher, you have +4 armor."
  },
  "protective_counter": {
    "name": "Protective Counter",
    "key": "protective_counter",
    "requires": "counterspell",
    "description": "When an ally within sight of you is affected by an arcane spell, you can counter it as if it affected you. If the spell affects multiple allies you must counter for each ally separately."
  },
  "ethereal_tether": {
    "name": "Ethereal Tether",
    "key": "ethereal_tether",
    "description": "When you have time with a willing or helpless subject you can craft an ethereal tether with them. You perceive what they perceive and can {{move 'discern_realities'}} about someone tethered to you or their surroundings no matter the distance. Someone willingly tethered to you can communicate with you over the tether as if you were in the room with them."
  },
  "mystical_puppet_strings": {
    "name": "Mystical Puppet Strings",
    "key": "mystical_puppet_strings",
    "description": "When you use magic to control a person’s actions they have no memory of what you had them do and bear you no ill will."
  },
  "spell_augmentation": {
    "name": "Spell Augmentation",
    "key": "spell_augmentation",
    "description": "When you deal damage to a creature you can shunt a spell’s energy into them—end one of your ongoing spells and add the spell’s level to the damage dealt."
  },
  "self_powered": {
    "name": "Self-Powered",
    "key": "self_powered",
    "description": "When you have time, arcane materials, and a safe space, you can create your own place of power. Describe to the GM what kind of power it is and how you’re binding it to this place, the GM will tell you one kind of creature that will have an interest in your workings."
  },
  "spellbook": {
    "name": "Spellbook",
    "key": "spellbook",
    "description": "You have mastered several spells and inscribed them in your spellbook. You start out with three first level spells in your spellbook as well as the cantrips. Whenever you gain a level, you add a new spell of your level or lower to your spellbook. You spellbook is 1 weight."
  },
  "prepare_spells": {
    "name": "Prepare Spells",
    "key": "prepare_spells",
    "description": "When you spend uninterrupted time (an hour or so) in quiet contemplation of your spellbook, you:\nLose any spells you already have prepared\n\nPrepare new spells of your choice from your spellbook whose total levels don’t exceed your own level+1.\n\nPrepare your cantrips which never count against your limit.\n - Lose any spells you already have prepared\n - Prepare new spells of your choice from your spellbook whose total levels don’t exceed your own level+1.\n - Prepare your cantrips which never count against your limit."
  },
  "cast_a_spell_wizard": {
    "name": "Cast a Spell",
    "key": "cast_a_spell_wizard",
    "description": "When you release a spell you’ve prepared, roll+Int. ✴On a 10+, the spell is successfully cast and you do not forget the spell—you may cast it again later. ✴On a 7-9, the spell is cast, but choose one:\nYou draw unwelcome attention or put yourself in a spot. The GM will tell you how.\n\nThe spell disturbs the fabric of reality as it is cast—take -1 ongoing to cast a spell until the next time you Prepare Spells.\n\nAfter it is cast, the spell is forgotten. You cannot cast the spell again until you prepare spells.\n - You draw unwelcome attention or put yourself in a spot. The GM will tell you how.\n - The spell disturbs the fabric of reality as it is cast—take -1 ongoing to cast a spell until the next time you Prepare Spells.\n - After it is cast, the spell is forgotten. You cannot cast the spell again until you prepare spells.\nNote that maintaining spells with ongoing effects will sometimes cause a penalty to your roll to cast a spell."
  },
  "spell_defense": {
    "name": "Spell Defense",
    "key": "spell_defense",
    "description": "You may end any ongoing spell immediately and use the energy of its dissipation to deflect an oncoming attack. The spell ends and you subtract its level from the damage done to you."
  },
  "ritual": {
    "name": "Ritual",
    "key": "ritual",
    "description": "When you draw on a place of power to create a magical effect, tell the GM what you’re trying to achieve. Ritual effects are always possible, but the GM will give you one to four of the following conditions:\nIt’s going to take days/weeks/months\n\nFirst you must {{blank}}\n\nYou’ll need help from {{blank}}\n\nIt will require a lot of money\n\nThe best you can do is a lesser version, unreliable and limited\n\nYou and your allies will risk danger from {{blank}}\n\nYou’ll have to disenchant {{blank}} to do it\n - It’s going to take days/weeks/months\n - First you must {{blank}}\n - You’ll need help from {{blank}}\n - It will require a lot of money\n - The best you can do is a lesser version, unreliable and limited\n - You and your allies will risk danger from {{blank}}\n - You’ll have to disenchant {{blank}} to do it"
  },
  "wizard_elf": {
    name: 'Elf',
    description: "Magic is as natural as breath to you. Detect Magic is a cantrip for you."
  },
  "wizard_human": {
    name: 'Human',
    description: "Choose one {{classes.cleric.name}} spell. You can cast it as if it was a {{classes.wizard.name}} spell."
  }
}