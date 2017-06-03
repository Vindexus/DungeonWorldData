module.exports = 
{
  "name": "Druid",
  "key": "druid",
  "damage": "d6",
  "base_hp": 6,
  "load": 6,
  "description": "Cast your eyes around the fire. What has brought you to these people, stinking of the dust and sweat of the city? Perhaps it is a kindness—do you protect them as the mother bear watches over her cubs? Are they your pack, now? Strange brothers and sisters you have. Whatever your inspiration, they would certainly fail without your sharp senses and sharper claws.\n\nYou are of the sacred spaces; you are born of soil and wear the marks of her spirits on your skin. You may have had a life before, maybe you were a city dweller like them, but not now. You’ve given up that static shape. Listen to your allies pray to their carved stone gods and polish their silver shells. They speak of the glory they’ll find back in that festering town you left behind.\n\nTheir gods are children, their steel is false protection. You walk the old ways, you wear the pelts of the earth itself. You’ll take your share of the treasure, but will you ever walk as one of them? Only time will tell.",
  "names": {
    "elf": [
      "Hycorax",
      "Ethanwe",
      "Sinathel",
      "Demanor",
      "Menoliir",
      "Mithralan",
      "Taeros",
      "Aegor"
    ],
    "halfling": [
      "Tanner",
      "Dunstan",
      "Rose",
      "Ivy",
      "Robard",
      "Mab",
      "Thistle",
      "Puck",
      "Anne",
      "Serah"
    ],
    "human": [
      "Elana",
      "Obelis",
      "Herran",
      "Syla",
      "Andanna",
      "Siobhan",
      "Aziz",
      "Pelin",
      "Sibel",
      "Nils",
      "Wei"
    ]
  },
  "bonds": [
    "{{blank}} smells more like prey than a hunter.",
    "The spirits spoke to me of a great danger that follows {{blank}}.",
    "I have showed {{blank}} a secret rite of the Land.",
    "{{blank}} has tasted my blood and I theirs. We are bound by it."
  ],
  "looks": [
    [
      "Wise Eyes",
      "Wild Eyes",
      "Haunting Eyes"
    ],
    [
      "Furry Hood",
      "Messy Hair",
      "Braided Hair"
    ],
    [
      "Ceremonial Garb",
      "Practical Leathers",
      "Weathered Hides"
    ]
  ],
  "alignments": {
    "chaotic": {
      "description": "Destroy a symbol of civilization.",
      "name": "Chaotic"
    },
    "good": {
      "description": "Help something or someone grow.",
      "name": "Good"
    },
    "neutral": {
      "description": "Eliminate an unnatural menace.",
      "name": "Neutral"
    }
  },
  "alignments_list": {
    "points_to": "classes.druid.alignments",
    "list": [
      "chaotic",
      "good",
      "neutral"
    ]
  },
  "starting_gear": "You carry some token of your land, describe it.",
  "gear_choices": [
    {
      "label": "Choose your defenses",
      "list": [
        "{{item 'hide_armor'}}",
        "{{item 'wooden_shield'}}"
      ]
    },
    {
      "label": "Choose your armament:",
      "list": [
        "{{item 'shillelagh'}}",
        "{{item 'staff'}}",
        "{{item 'spear'}}"
      ]
    },
    {
      "label": "Choose one:",
      "list": [
        "{{item 'adventuring_gear'}}",
        "{{item 'poultices_and_herbs'}}",
        "{{item 'halfling_pipeleaf'}}",
        "{{item 'antitoxin'  uses=3}}"
      ]
    }
  ],
  "starting_moves": {
    "points_to": "moves",
    "list": [
      "born_of_the_soil",
      "by_nature_sustained",
      "spirit_tongue",
      "shapeshifter",
      "studied_essence"
    ]
  },
  "race_moves": {
    "points_to": "moves",
    "list": [
      "druid_elf",
      "druid_human",
      "druid_halfling"
    ]
  },
  "advanced_moves_1": {
    "points_to": "moves",
    "list": [
      "hunters_brother",
      "red_of_tooth_and_claw",
      "communion_of_whispers",
      "barkskin",
      "eyes_of_the_tiger",
      "shed",
      "thing_talker",
      "formcrafter",
      "elemental_mastery",
      "balance"
    ]
  },
  "advanced_moves_2": {
    "points_to": "moves",
    "list": [
      "embracing_no_form",
      "doppelgängers_dance",
      "blood_and_thunder",
      "the_druid_sleep",
      "world_talker",
      "stalkers_sister",
      "formshaper",
      "chimera",
      "weather_weaver"
    ]
  }
}