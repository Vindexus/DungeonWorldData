module.exports = 
{
  "name": "Cleric",
  "key": "cleric",
  "damage": "d6",
  "base_hp": 8,
  "load": 10,
  "description": "The lands of Dungeon World are a gods-forsaken mess. They’re lousy with the walking dead, beasts of all sorts, and the vast unnatural spaces between safe and temple-blessed civilizations. It is a godless world out there. That’s why it needs you.\n\nBringing the glory of your god to the heathens isn’t just in your nature—it’s your calling. It falls to you to proselytize with sword and mace and spell. To cleave deep into the witless heart of the wilds and plant the seed of divinity there. Some say that it is best to keep god close to your heart. You know that’s rubbish. God lives at the edge of a blade.\n\nShow the world who is lord.",
  "names": {
    "dwarf": [
      "Durga",
      "Aelfar",
      "Gerda",
      "Rurgosh",
      "Bjorn",
      "Drummond",
      "Helga",
      "Siggrun",
      "Freya"
    ],
    "human": [
      "Wesley",
      "Brinton",
      "Jon",
      "Sara",
      "Hawthorn",
      "Elise",
      "Clarke",
      "Lenore",
      "Piotr",
      "Dahlia",
      "Carmine"
    ]
  },
  "bonds": [
    "{{blank}} has insulted my deity; I do not trust them.",
    "{{blank}} is a good and faithful person; I trust them implicitly.",
    "{{blank}} is in constant danger, I will keep them safe.",
    "I am working on converting {{blank}} to my faith."
  ],
  "looks": [
    [
      "Kind Eyes",
      "Sharp Eyes",
      "Sad Eyes"
    ],
    [
      "Tonsure",
      "Strange Hair",
      "Bald"
    ],
    [
      "Flowing Robes",
      "Habit",
      "Common Garb"
    ],
    [
      "Thin Body",
      "Knobby Body",
      "Flabby Body"
    ]
  ],
  "alignments": {
    "good": {
      "description": "Endanger yourself to heal another.",
      "name": "Good"
    },
    "lawful": {
      "description": "Endanger yourself following the precepts of your church or god.",
      "name": "Lawful"
    },
    "evil": {
      "description": "Harm another to prove the superiority of your church or god.",
      "name": "Evil"
    }
  },
  "alignments_list": {
    "points_to": "classes.cleric.alignments",
    "list": [
      "good",
      "lawful",
      "evil"
    ]
  },
  "gear_choices": [
    {
      "label": "",
      "list": [
        "chainmail",
        "shield"
      ]
    },
    {
      "label": "",
      "list": [
        "warhammer",
        "mace",
        "staff"
      ]
    },
    {
      "label": "",
      "list": [
        "adventuring_gear",
        "healing_potion"
      ]
    }
  ],
  "starting_moves": {
    "points_to": "moves",
    "list": [
      "deity",
      "divine_guidance",
      "turn_undead",
      "commune",
      "cast_a_spell_cleric"
    ]
  },
  "race_moves": {
    "points_to": "moves",
    "list": [
      "cleric_dwarf",
      "cleric_human"
    ]
  },
  "advanced_moves_1": {
    "points_to": "moves",
    "list": [
      "chosen_one",
      "invigorate",
      "the_scales_of_life_and_death",
      "serenity",
      "first_aid",
      "divine_intervention",
      "penitent",
      "empower",
      "orison_for_guidance",
      "divine_protection",
      "devoted_healer"
    ]
  },
  "advanced_moves_2": {
    "points_to": "moves",
    "list": [
      "anointed",
      "apotheosis",
      "reaper",
      "providence",
      "greater_first_aid",
      "divine_invincibility",
      "martyr",
      "divine_armor",
      "greater_empower",
      "multiclass_dabbler"
    ]
  }
}