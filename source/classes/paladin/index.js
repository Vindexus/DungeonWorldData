module.exports = 
{
  "name": "Paladin",
  "key": "paladin",
  "damage": "d10",
  "base_hp": 10,
  "load": 12,
  "description": "Hell awaits. An eternity of torment in fire or ice or whatever best suits the sins of the damned throngs of Dungeon World. All that stands between the pits of that grim torture and salvation is you. Holy man, armored war machine, templar of the Good and the Light, right? The cleric may say his prayers at night to the gods, dwelling in their heavens. The fighter may wield his sharp sword in the name of “good” but you know. Only you.\n\nEyes, hands, and sweet killing blow of the gods, you are. Yours is the gift of righteousness and virtue. Of justice. Vision, too. A purity of intent that your companions do not have.\n\nSo guide these fools, paladin. Take up your holy cause and bring salvation to the wastrel world. \n\nVae victis, right?",
  "names": {
    "human": [
      "Thaddeus",
      "Augustine",
      "Lux",
      "Cassius",
      "Hadrian",
      "Lucia",
      "Octavia",
      "Regulus",
      "Valeria",
      "Sanguinus",
      "Titanius"
    ]
  },
  "bonds": [
    "{{blank}}’s misguided behavior endangers their very soul!",
    "{{blank}} has stood by me in battle and can be trusted completely.",
    "I respect the beliefs of {{blank}} but hope they will someday see the true way.",
    "{{blank}} is a brave soul, I have much to learn from them."
  ],
  "looks": [
    [
      "Kind Eyes",
      "Fiery Eyes",
      "Glowing Eyes"
    ],
    [
      "Helmet",
      "Styled Hair",
      "Bald"
    ],
    [
      "Worn Holy Symbol Fancy Holy Symbol"
    ],
    [
      "Fit Body",
      "Bulky Body",
      "Thin Body"
    ]
  ],
  "alignments": {
    "lawful": {
      "description": "Deny mercy to a criminal or unbeliever.",
      "name": "Lawful"
    },
    "good": {
      "description": "Endanger yourself to protect someone weaker than you.",
      "name": "Good"
    }
  },
  "alignments_list": {
    "points_to": "classes.paladin.alignments",
    "list": [
      "lawful",
      "good"
    ]
  },
  "gear_choices": [
    {
      "label": "",
      "list": [
        "halberd",
        "long_sword"
      ]
    },
    {
      "label": "",
      "list": [
        "adventuring_gear",
        "dungeon_rations"
      ]
    }
  ],
  "starting_moves": {
    "points_to": "moves",
    "list": [
      "lay_on_hands_cha",
      "armored",
      "i_am_the_law",
      "quest"
    ]
  },
  "race_moves": {
    "points_to": "moves",
    "list": [
      "paladin_human"
    ]
  },
  "advanced_moves_1": {
    "points_to": "moves",
    "list": [
      "divine_favor",
      "bloody_aegis",
      "smite",
      "exterminatus",
      "charge",
      "staunch_defender",
      "setup_strike",
      "holy_protection",
      "voice_of_authority",
      "hospitaller"
    ]
  },
  "advanced_moves_2": {
    "points_to": "moves",
    "list": [
      "evidence_of_faith",
      "holy_smite",
      "ever_onward",
      "impervious_defender",
      "tandem_strike",
      "divine_protection",
      "divine_authority",
      "perfect_hospitaller",
      "indomitable",
      "perfect_knight"
    ]
  }
}