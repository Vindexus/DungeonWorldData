module.exports = 
{
  "deity": {
    "name": "Deity",
    "key": "deity",
    "description": "You serve and worship some deity or power which grants you spells. Give your god a name (maybe Helferth, Sucellus, Zorica or Krugon the Bleak) and choose your deity’s domain:\n\n - Healing and Restoration\n - Bloody Conquest\n - Civilization\n - Knowledge and Hidden Things\n - The Downtrodden and Forgotten\n - What Lies Beneath\nChoose one precept of your religion:\n\n - Your religion preaches the sanctity of suffering, add Petition: Suffering\n - Your religion is cultish and insular, add Petition: Gaining Secrets\n - Your religion has important sacrificial rites, add Petition: Offering\n - Your religion believes in trial by combat, add Petition: Personal Victory"
  },
  "divine_guidance": {
    "name": "Divine Guidance",
    "key": "divine_guidance",
    "description": "When you petition your deity according to the precept of your religion, you are granted some useful knowledge or boon related to your deity’s domain. The GM will tell you what."
  },
  "turn_undead": {
    "name": "Turn Undead",
    "key": "turn_undead",
    "description": "When you hold your holy symbol aloft and call on your deity for protection, roll+Wis. On a 7+, so long as you continue to pray and brandish your holy symbol, no undead may come within reach of you. On a 10+, you also momentarily daze intelligent undead and cause mindless undead to flee. Aggression breaks the effects and they are able to act as normal. Intelligent undead may still find ways to harry you from afar. They’re clever like that."
  },
  "commune": {
    "name": "Commune",
    "key": "commune",
    "description": "When you spend uninterrupted time (an hour or so) in quiet communion with your deity, you:\n\n - Lose any spells already granted to you.\n - Are granted new spells of your choice whose total levels don’t exceed your own level+1, and none of which is a higher level than your own level.\n - Prepare all of your rotes, which never count against your limit."
  },
  "cast_a_spell_cleric": {
    "name": "Cast a Spell",
    "key": "cast_a_spell_cleric",
    "description": "When you unleash a spell granted to you by your deity, roll+Wis. On a 10+, the spell is successfully cast and your deity does not revoke the spell, so you may cast it again. On a 7–9, the spell is cast, but choose one:\n\n - You draw unwelcome attention or put yourself in a spot. The GM will tell you how.\n - Your casting distances you from your deity—take -1 ongoing to cast a spell until the next time you commune.\n - After you cast it, the spell is revoked by your deity. You cannot cast the spell again until you commune and have it granted to you.\nNote that maintaining spells with ongoing effects will sometimes cause a penalty to your roll to cast a spell."
  },
  "cleric_dwarf": {
    "name": "Dwarf",
    "key": "cleric_dwarf",
    "description": "You are one with stone. When you {{move 'commune'}} you are also granted a special version of Words of the Unspeaking as a rote which only works on stone."
  },
  "cleric_human": {
    "name": "Human",
    "key": "cleric_human",
    "description": "Your faith is diverse. Choose one wizard spell. You can cast and be granted that spell as if it was a cleric spell."
  },
  "chosen_one": {
    "name": "Chosen One",
    "key": "chosen_one",
    "description": "Choose one spell. You are granted that spell as if it was one level lower."
  },
  "invigorate": {
    "name": "Invigorate",
    "key": "invigorate",
    "description": "When you heal someone they take +2 forward to their damage."
  },
  "the_scales_of_life_and_death": {
    "name": "The Scales of Life and Death",
    "key": "the_scales_of_life_and_death",
    "description": "When someone takes their last breath in your presence, they take +1 to the roll."
  },
  "serenity": {
    "name": "Serenity",
    "key": "serenity",
    "description": "When you {{move 'cast_a_spell_cleric'}} you ignore the first -1 penalty from ongoing spells."
  },
  "first_aid": {
    "name": "First Aid",
    "key": "first_aid",
    "description": "Cure Light Wounds is a rote for you, and therefore doesn’t count against your limit of granted spells."
  },
  "divine_intervention": {
    "name": "Divine Intervention",
    "key": "divine_intervention",
    "description": "When you {{move 'commune'}} you get 1 hold and lose any hold you already had. Spend that hold when you or an ally takes damage to call on your deity, they intervene with an appropriate manifestation (a sudden gust of wind, a lucky slip, a burst of light) and negate the damage."
  },
  "penitent": {
    "name": "Penitent",
    "key": "penitent",
    "description": "When you take damage and embrace the pain, you may take +1d4 damage (ignoring armor). If you do, take +1 forward to cast a spell."
  },
  "empower": {
    "name": "Empower",
    "key": "empower",
    "description": "When you {{move 'cast_a_spell_cleric'}}, on a 10+ you have the option of choosing from the 7–9 list. If you do, you may choose one of these effects as well:\n\n - The spell’s effects are doubled\n - The spell’s targets are doubled"
  },
  "orison_for_guidance": {
    "name": "Orison for Guidance",
    "key": "orison_for_guidance",
    "description": "When you sacrifice something of value to your deity and pray for guidance, your deity tells you what it would have you do. If you do it, mark experience."
  },
  "divine_protection": {
    "name": "Divine Protection",
    "key": "divine_protection",
    "description": "When you wear no armor or shield you get 2 armor."
  },
  "devoted_healer": {
    "name": "Devoted Healer",
    "key": "devoted_healer",
    "description": "When you heal someone else of damage, add your level to the amount of damage healed."
  },
  "anointed": {
    "name": "Anointed",
    "key": "anointed",
    "requires": "chosen_one",
    "description": "Choose one spell in addition to the one you picked for chosen one. You are granted that spell as if it was one level lower."
  },
  "apotheosis": {
    "name": "Apotheosis",
    "key": "apotheosis",
    "description": "The first time you spend time in prayer as appropriate to your god after taking this move, choose a feature associated with your deity (rending claws, wings of sapphire feathers, an all-seeing third eye, etc.). When you emerge from prayer, you permanently gain that physical feature."
  },
  "reaper": {
    "name": "Reaper",
    "key": "reaper",
    "description": "When you take time after a conflict to dedicate your victory to your deity and deal with the dead, take +1 forward."
  },
  "providence": {
    "name": "Providence",
    "key": "providence",
    "replaces": "serenity",
    "description": "You ignore the -1 penalty from two spells you maintain."
  },
  "greater_first_aid": {
    "name": "Greater First Aid",
    "key": "greater_first_aid",
    "requires": "first_aid",
    "description": "Cure Moderate Wounds is a rote for you, and therefore doesn’t count against your limit of granted spells."
  },
  "divine_invincibility": {
    "name": "Divine Invincibility",
    "key": "divine_invincibility",
    "replaces": "divine_intervention",
    "description": "When you {{move 'commune'}} you gain 2 hold and lose any hold you already had. Spend that hold when you or an ally takes damage to call on your deity, who intervenes with an appropriate manifestation (a sudden gust of wind, a lucky slip, a burst of light) and negates the damage."
  },
  "martyr": {
    "name": "Martyr",
    "key": "martyr",
    "replaces": "penitent",
    "description": "When you take damage and embrace the pain, you may take +1d4 damage (ignoring armor). If you do, take +1 forward to cast a spell and add your level to any damage done or healed by the spell."
  },
  "divine_armor": {
    "name": "Divine Armor",
    "key": "divine_armor",
    "replaces": "divine_protection",
    "description": "When you wear no armor or shield you get 3 armor."
  },
  "greater_empower": {
    "name": "Greater Empower",
    "key": "greater_empower",
    "replaces": "empower",
    "description": "When you cast a spell, on a 10–11 you have the option of choosing from the 7–9 list. If you do, you may choose one of these effects as well. On a 12+ you get to choose one of these effects for free.\n\n - The spell’s effects are doubled\n - The spell’s targets are doubled"
  },
  "multiclass_dabbler": {
    "name": "Multiclass Dabbler",
    "key": "multiclass_dabbler",
    "description": "Get one move from another class. Treat your level as one lower for choosing the move."
  }
}