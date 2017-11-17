module.exports = 
{
  "name": "Wizard",
  "key": "wizard",
  "damage": "d4",
  "base_hp": 4,
  "load": 7,
  "description": "Dungeon World has rules. Not the laws of men or the rule of some petty tyrant. Bigger, better rules. You drop something—it falls. You can’t make something out of nothing. The dead stay dead, right?\n\nOh, the things we tell ourselves to feel better about the long, dark nights.\n\nYou’ve spent so very long poring over those tomes of yours. The experiments that nearly drove you mad and all the botched summonings that endangered your very soul. For what? For power. What else is there? Not just the power of King or Country but the power to boil a man’s blood in his veins. To call on the thunder of the sky and the churn of the roiling earth. To shrug off the rules the world holds so dear.\n\nLet them cast their sidelong glances. Let them call you “warlock” or “diabolist.” Who among them can hurl fireballs from their eyes?\n\nYeah. We didn’t think so.",
  "names": {
    "elf": [
      "Galadiir",
      "Fenfaril",
      "Lilliastre",
      "Phirosalle",
      "Enkirash",
      "Halwyr"
    ],
    "human": [
      "Avon",
      "Morgan",
      "Rath",
      "Ysolde",
      "Ovid",
      "Vitus",
      "Aldara",
      "Xeno",
      "Uri"
    ]
  },
  "bonds": [
    "{{blank}} will play an important role in the events to come. I have foreseen it!",
    "{{blank}} is keeping an important secret from me.",
    "{{blank}} is woefully misinformed about the world; I will teach them all that I can."
  ],
  "looks": [
    [
      "Haunted Eyes",
      "Sharp Eyes",
      "Crazy Eyes"
    ],
    [
      "Styled Hair",
      "Wild Hair",
      "Pointed Hat"
    ],
    [
      "Worn Robes",
      "Stylish Robes",
      "Strange Robes"
    ],
    [
      "Pudgy Body",
      "Creepy Body",
      "Thin Body"
    ]
  ],
  "alignments": {
    "good": {
      "description": "Use magic to directly aid another.",
      "name": "Good"
    },
    "neutral": {
      "description": "Discover something about a magical mystery.",
      "name": "Neutral"
    },
    "evil": {
      "description": "Use magic to cause terror and fear.",
      "name": "Evil"
    }
  },
  "alignments_list": {
    "points_to": "classes.wizard.alignments",
    "list": [
      "good",
      "neutral",
      "evil"
    ]
  },
  "starting_gear": "You start with your spellbook (1 weight) and {{item 'dungeon_rations'}}.",
  "gear_choices": [
    {
      "label": "Choose your defenses",
      "list": [
        "{{item 'leather_armor' uppercase=true}}",
        "{{item 'bag_of_books' uppercase=true}} and 3 {{item 'healing_potion'}}"
      ]
    },
    {
      "label": "Choose your weapon",
      "list": [
        "{{item 'dagger' uppercase=true}}",
        "{{item 'staff' uppercase=true}}"
      ]
    },
    {
      "label": "Choose one",
      "list": [
        "{{item 'healing_potion' uppercase=true}}",
        "3 {{item 'antitoxin' plural=true}}"
      ]
    }
  ],
  "starting_moves": {
    "points_to": "moves",
    "list": [
      "spellbook",
      "prepare_spells",
      "cast_a_spell_wizard",
      "spell_defense",
      "ritual"
    ]
  },
  "race_moves": {
    "points_to": "moves",
    "list": [
      "wizard_elf",
      "wizard_human"
    ]
  },
  "advanced_moves_1": {
    "points_to": "moves",
    "list": [
      "prodigy",
      "empowered_magic",
      "fount_of_knowledge",
      "know_it_all",
      "expanded_spellbook",
      "enchanter",
      "logical",
      "arcane_ward",
      "counterspell",
      "quick_study"
    ]
  },
  "advanced_moves_2": {
    "points_to": "moves",
    "list": [
      "master",
      "greater_empowered_magic",
      "enchanters_soul",
      "highly_logical",
      "arcane_armor",
      "protective_counter",
      "ethereal_tether",
      "mystical_puppet_strings",
      "spell_augmentation",
      "self_powered"
    ]
  },
  "spells_list": {
    "points_to": "classes.wizard.spells",
    "list": [
      'detect_magic',
      'light'
    ]
  }
}