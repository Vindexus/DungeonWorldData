module.exports = 
{
  "name": "Thief",
  "key": "thief",
  "damage": "d8",
  "base_hp": 6,
  "load": 9,
  "description": "You’ve heard them, sitting around the campfire. Bragging about this battle or that. About how their gods are smiling on your merry band. You count your coins and smile to yourself—this is the thrill above all. You alone know the secret of Dungeon World—filthy filthy lucre.\n\nSure, they give you lip for all the times you’ve snuck off alone but without you, who among them wouldn’t have been dissected by a flying guillotine or poisoned straight to death by some ancient needle trap? So, let them complain. When you’re done with all this delving you’ll toast their hero’s graves.\n\nFrom your castle. Full of gold. You rogue.",
  "names": {
    "halfling": [
      "Felix",
      "Rook",
      "Mouse",
      "Sketch",
      "Trixie",
      "Robin",
      "Omar",
      "Brynn",
      "Bug"
    ],
    "human": [
      "Sparrow",
      "Shank",
      "Jack",
      "Marlow",
      "Dodge",
      "Rat",
      "Pox",
      "Humble",
      "Farley"
    ]
  },
  "bonds": [
    "I stole something from {{blank}}.",
    "{{blank}} has my back when things go wrong.",
    "{{blank}} knows incriminating details about me.",
    "{{blank}} and I have a con running."
  ],
  "looks": [
    [
      "Shifty Eyes Criminal Eyes"
    ],
    [
      "Hooded Head",
      "Messy Hair",
      "Cropped Hair"
    ],
    [
      "Dark Clothes",
      "Fancy Clothes",
      "Common Clothes"
    ],
    [
      "Lithe Body",
      "Knobby Body",
      "Flabby Body"
    ]
  ],
  "alignments": {
    "chaotic": {
      "description": "Leap into danger without a plan.",
      "name": "Chaotic"
    },
    "neutral": {
      "description": "Avoid detection or infiltrate a location.",
      "name": "Neutral"
    },
    "evil": {
      "description": "Shift danger or blame from yourself to someone else.",
      "name": "Evil"
    }
  },
  "alignments_list": {
    "points_to": "classes.thief.alignments",
    "list": [
      "chaotic",
      "neutral",
      "evil"
    ]
  },
  "starting_gear": "You start with {{item 'dungeon_rations'}}, {{item 'leather_armor'}}, 3 uses of your chosen poison, and 10 coins.",
  "gear_choices": [
    {
      "label": "Choose your arms",
      "list": [
        "{{item 'dagger' uppercase=true}} and {{item 'short_sword'}}",
        "{{item 'rapier'}}"
      ]
    },
    {
      "label": "Choose a ranged weapon",
      "list": [
        "3 {{item 'throwing_dagger' plural=true}}",
        "{{item 'ragged_bow' uppercase=true}} and {{item 'bundle_of_arrows'}}"
      ]
    },
    {
      "label": "Choose one",
      "list": [
        "{{item 'adventuring_gear' uppercase=true}}",
        "{{item 'healing_potion' uppercase=true}}"
      ]
    }
  ],
  "starting_moves": {
    "points_to": "moves",
    "list": [
      "trap_expert",
      "tricks_of_the_trade",
      "backstab",
      "flexible_morals",
      "poisoner"
    ]
  },
  "race_moves": {
    "points_to": "moves",
    "list": [
      "thief_halfling",
      "thief_human"
    ]
  },
  "advanced_moves_1": {
    "points_to": "moves",
    "list": [
      "cheap_shot",
      "cautious",
      "wealth_and_taste",
      "shoot_first",
      "poison_master",
      "envenom",
      "brewer",
      "underdog",
      "connections"
    ]
  },
  "advanced_moves_2": {
    "points_to": "moves",
    "list": [
      "dirty_fighter",
      "extremely_cautious",
      "alchemist",
      "serious_underdog",
      "evasion",
      "strong_arm_true_aim",
      "escape_route",
      "disguise",
      "heist"
    ]
  }
}