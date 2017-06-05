module.exports = 
{
  "name": "Fighter",
  "key": "fighter",
  "damage": "d10",
  "base_hp": 10,
  "load": 12,
  "description": "It’s a thankless job—living day to day by your armor and the skill of your arm. To dive heedlessly into danger. They won’t be playing golden horns for the time you took that knife to the ribs for them in the bar in Bucksberg. No flock of angels to sing of the time you dragged them, still screaming, from the edge of the Pits of Madness, no.\n\nForget them.\n\nYou do this for the guts and the glory. The scream of battle and the hot, hot blood of it. You are a beast of iron. Your friends may carry blades of forged steel but, fighter, you are steel. While your traveling companions might moan about their wounds over a campfire in the wilderness, you bear your scars with pride.\n\nYou are the wall—let every danger smash itself to nothing on you. In the end, you’ll be the last one standing.",
  "names": {
    "dwarf": [
      "Ozruk",
      "Surtur",
      "Brunhilda",
      "Annika",
      "Janos",
      "Greta",
      "Dim",
      "Rundrig",
      "Jarl",
      "Xotoq"
    ],
    "elf": [
      "Elohiir",
      "Sharaseth",
      "Hasrith",
      "Shevaral",
      "Cadeus",
      "Eldar",
      "Kithracet",
      "Thelian"
    ],
    "halfling": [
      "Finnegan",
      "Olive",
      "Randolph",
      "Bartleby",
      "Aubrey",
      "Baldwin",
      "Becca"
    ],
    "human": [
      "Hawke",
      "Rudiger",
      "Gregor",
      "Brianne",
      "Walton",
      "Castor",
      "Shanna",
      "Ajax",
      "Hob"
    ]
  },
  "bonds": [
    "{{blank}} owes me their life, whether they admit it or not.",
    "I have sworn to protect {{blank}}.",
    "I worry about the ability of {{blank}} to survive in the dungeon.",
    "{{blank}} is soft, but I will make them hard like me."
  ],
  "looks": [
    [
      "Hard Eyes",
      "Dead Eyes",
      "Eager Eyes"
    ],
    [
      "Wild Hair",
      "Shorn Hair",
      "Battered Helm"
    ],
    [
      "Calloused Skin",
      "Tanned Skin",
      "Scarred Skin"
    ],
    [
      "Built Body",
      "Lithe Body",
      "Ravaged Body"
    ]
  ],
  "alignments": {
    "good": {
      "description": "Defend those weaker than you.",
      "name": "Good"
    },
    "neutral": {
      "description": "Defeat a worthy opponent.",
      "name": "Neutral"
    },
    "evil": {
      "description": "Kill a defenseless or surrendered enemy.",
      "name": "Evil"
    }
  },
  "alignments_list": {
    "points_to": "classes.fighter.alignments",
    "list": [
      "good",
      "neutral",
      "evil"
    ]
  },
  starting_gear: "You carry your signature weapon and {{item 'dungeon_rations'}}.",
  "gear_choices": [
    {
      "label": "Choose your defenses",
      "list": [
        "{{item 'chainmail'}}",
        "{{item 'scale_armor'}}"
      ]
    },
    {
      "label": "Choose two",
      "list": [
        "2 {{item 'healing_potion' plural=true}}",
        "{{item 'shield' uppercase=true}}",
        "{{item 'antitoxin' uppercase=true}}, {{item 'dungeon_rations'}}, and {{item 'poultices_and_herbs'}}",
        "22 coins"
      ]
    }
  ],
  "starting_moves": {
    "points_to": "moves",
    "list": [
      "bend_bars_lift_gates",
      "armored",
      "signature_weapon"
    ]
  },
  "race_moves": {
    "points_to": "moves",
    "list": [
      "fighter_dwarf",
      "fighter_elf",
      "fighter_halfling",
      "fighter_human"
    ]
  },
  "advanced_moves_1": {
    "points_to": "moves",
    "list": [
      "merciless",
      "heirloom",
      "armor_mastery",
      "improved_weapon",
      "seeing_red",
      "interrogator",
      "scent_of_blood",
      "multiclass_dabbler",
      "iron_hide",
      "blacksmith"
    ]
  },
  "advanced_moves_2": {
    "points_to": "moves",
    "list": [
      "bloodthirsty",
      "armored_perfection",
      "evil_eye",
      "taste_of_blood",
      "multiclass_initiate",
      "steel_hide",
      "through_deaths_eyes",
      "eye_for_weaponry",
      "superior_warrior"
    ]
  }
}