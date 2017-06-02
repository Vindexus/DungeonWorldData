module.exports = 
{
  "name": "Ranger",
  "key": "ranger",
  "damage": "d8",
  "base_hp": 8,
  "load": 11,
  "description": "These city-born folk you travel with. Have they heard the call of the wolf? Felt the winds howl in the bleak deserts of the East? Have they hunted their prey with the bow and the knife like you? Hell no. That’s why they need you.\n\nGuide. Hunter. Creature of the wilds. You are these things and more. Your time in the wilderness may have been solitary until now, but the call of some greater thing—call it fate if you like—has cast your lot with these folk. Brave, they may be. Powerful and strong, too. You know the secrets of the spaces between, though.\n\nWithout you, they’d be lost. Blaze a trail through the blood and dark, strider.",
  "names": {
    "elf": [
      "Throndir",
      "Elrosine",
      "Aranwe",
      "Celion",
      "Dambrath",
      "Lanethe"
    ],
    "human": [
      "Jonah",
      "Halek",
      "Brandon",
      "Emory",
      "Shrike",
      "Nora",
      "Diana"
    ]
  },
  "bonds": [],
  "looks": [
    [
      "Wild Eyes",
      "Sharp Eyes",
      "Animal Eyes"
    ],
    [
      "Hooded Head",
      "Wild Hair",
      "Bald"
    ],
    [
      "Cape",
      "Camouflage",
      "Traveling Clothes"
    ],
    [
      "Lithe Body",
      "Wild Body",
      "Sharp Body"
    ]
  ],
  "alignments": {
    "chaotic": {
      "description": "Free someone from literal or figurative bonds.",
      "name": "Chaotic"
    },
    "good": {
      "description": "Endanger yourself to combat an unnatural threat.",
      "name": "Good"
    },
    "neutral": {
      "description": "Help an animal or spirit of the wild.",
      "name": "Neutral"
    }
  },
  "alignments_list": {
    "points_to": "classes.ranger.alignments",
    "list": [
      "chaotic",
      "good",
      "neutral"
    ]
  },
  "gear_choices": [
    {
      "label": "",
      "list": [
        "hunters_bow",
        "hunters_bow"
      ]
    },
    {
      "label": "",
      "list": [
        "adventuring_gear",
        "adventuring_gear"
      ]
    }
  ],
  "starting_moves": {
    "points_to": "moves",
    "list": [
      "hunt_and_track_wis",
      "called_shot",
      "animal_companion",
      "command"
    ]
  },
  "race_moves": {
    "points_to": "moves",
    "list": [
      "ranger_elf",
      "ranger_human"
    ]
  },
  "advanced_moves_1": {
    "points_to": "moves",
    "list": [
      "half_elven",
      "wild_empathy",
      "familiar_prey",
      "vipers_strike",
      "camouflage",
      "mans_best_friend",
      "blot_out_the_sun",
      "well_trained",
      "god_amidst_the_wastes",
      "follow_me",
      "a_safe_place"
    ]
  },
  "advanced_moves_2": {
    "points_to": "moves",
    "list": [
      "wild_speech",
      "hunters_prey",
      "vipers_fangs",
      "smaugs_belly",
      "strider",
      "a_safer_place",
      "observant",
      "special_trick",
      "unnatural_ally"
    ]
  }
}