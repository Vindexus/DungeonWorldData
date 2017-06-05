var tags = {
  "applied": {
    "description": "It’s only useful when carefully applied to a person or to something they eat or drink."
  },
  "awkward": {
    "description": "It’s unwieldy and tough to use. "
  },
  "bonus": {
    "name": "+bonus",
    "description": "It modifies your effectiveness in a specified situation. It might be “+1 forward to spout lore” or “-1 ongoing to hack and slash.”"
  },
  "coins": {
    "name": "n coins",
    "description": "How much it costs to buy, normally. If the cost includes “-Charisma” a little negotiation subtracts the haggler’s Charisma score (not modifier) from the price."
  },
  "dangerous": {
    "description": "It’s easy to get in trouble with it. If you interact with it without proper precautions the GM may freely invoke the consequences of your foolish actions."
  },
  "ration": {
    "description": "It’s edible, more or less."
  },
  "requires": {
    "description": "It’s only useful to certain people. If you don’t meet the requirements it works poorly, if at all."
  },
  "slow": {
    "description": "It takes minutes or more to use."
  },
  "touch": {
    "description": "It’s used by touching it to the target’s skin."
  },
  "two_handed": {
    "name": "two-handed",
    "description": "It takes two hands to use it effectively."
  },
  "weight": {
    "name": "n weight",
    "description": "Count the listed amount against your load. Something with no listed weight isn’t designed to be carried. 100 coins in standard denominations is 1 weight. The same value in gems or fine art may be lighter or heavier."
  },
  "worn": {
    "description": "To use it, you have to be wearing it."
  },
  "uses": {
    "name": "n uses",
    "description": "It can only be used n times. "
  },
  "ammo": {
    "name": "n ammo",
    "description": "It counts as ammunition for appropriate ranged weapons. The number indicated does not represent individual arrows or sling stones, but represents what you have left on hand. "
  },
  "forceful": {
    "description": "It can knock someone back a pace, maybe even off their feet. "
  },
  "damage": {
    "name": "+n damage",
    "description": "It is particularly harmful to your enemies. When you deal damage, you add n to it."
  },
  "ignores_armor": {
    "description": "Don’t subtract armor from the damage taken."
  },
  "messy": {
    "name": "Messy",
    "description": "It does damage in a particularly destructive way, ripping people and things apart."
  },
  "piercing": {
    "name": "n piercing",
    "description": "It goes right through armor. When you deal damage with n piercing, you subtract n from the enemy’s armor for that attack."
  },
  "precise": {
    "name": "Precise",
    "description": "It rewards careful strikes. You use DEX to {{move 'hack_and_slash'}} with this weapon, not STR."
  },
  "reload": {
    "description": "After you attack with it, it takes more than a moment to reset for another attack. "
  },
  "stun": {
    "description": "When you attack with it, it does stun damage instead of normal damage. "
  },
  "thrown": {
    "description": "Throw it at someone to hurt them. If you {{move 'volley'}} with this weapon, you can’t choose to mark off ammo on a 7–9; once you throw it, it’s gone until you can recover it. "
  },
  "hand": {
    "description": "It’s useful for attacking something within your reach, no further."
  },
  "close": {
    "description": "It’s useful for attacking something at arm’s reach plus a foot or two."
  },
  "reach": {
    "description": "It’s useful for attacking something that’s several feet away—maybe as far as ten. "
  },
  "near": {
    "description": "It’s useful for attacking if you can see the whites of their eyes. "
  },
  "far": {
    "description": "It’s useful for attacking something in shouting distance."
  },
  "armor": {
    "name": "+n armor",
    "description": "It protects you and stacks with other armor. Add its value to your total armor."
  },
  "clumsy": {
    "description": "It’s tough to move around with. -1 ongoing while using it. This penalty is cumulative."
  },
  "magical": {
    "description": "When making your own magic items keep in mind that these items are magical. Simple modifiers, like+1 damage, are the realm of the mundane—magic items should provide more interesting bonuses."
  }
}

for(var key in tags) {
  tags[key].key = key;
  tags[key].name = tags[key].name || key.split('_').join(' ');
}

module.exports = tags;