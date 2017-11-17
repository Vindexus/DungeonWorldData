var helpers = require('../../lib/source_helper')

var short_sword_tags = ['close', {coins: 8}, {weight: 1}];
var long_sword_tags = ['close', {damage: '+1'}, {coins: 15}, {weight: 2}]
var club_tags = ['close', {coins: 1}, {weight: 1}];
var dagger_tags = ['hand', {coins: 2}, {weight: 1}];

var items = {
  /* Weapons */
  ragged_bow: {
    tags: ['near', {coins: 15}, {weight: 2}]
  },
  fine_bow: {
    tags: ['near', 'far', {coins: 60}, {weight: 2}]
  },
  hunters_bow: {
    name: "hunter's bow",
    tags: ['near', 'far', {weight: 1}]
  },
  crossbow: {
    tags: ['near', {damage: '+1'}, 'reload', {coins: 35}, {weight: 3}]
  },
  bundle_of_arrows: {
    name: 'Bundle of Arrows',
    tags: [{ammo: 3}, {coins: 1}, {weight: 1}]
  },
  elven_arrows: {
    tags: [{ammo: 4}, {coins: 20}, {weight: 1}]
  },
  club: {
    tags: club_tags
  },
  shillelagh: {
    tags: club_tags
  },
  staff: {
    tags: ['close', 'two_handed', {coins: 1}, {weight: 1}]
  },
  dagger: {
    tags: dagger_tags
  },
  shiv: {
    tags: dagger_tags
  },
  throwing_dagger: {
    tags: ['thrown', 'near', {coins: 1}, {weight: 0}]
  },
  short_sword: {
    name: 'Short Sword',
    tags: short_sword_tags
  },
  axe: {
    name: 'Axe',
    tags: short_sword_tags
  },
  warhammer: {
    name: 'Warhammer',
    tags: short_sword_tags
  },
  mace: {
    name: 'Mace',
    tags: short_sword_tags
  },
  spear: {
    tags: ['reach', 'thrown', 'near', {coins: 5}, {weight: 1}]
  },
  long_sword_battle_axe_flail: {
    name: 'Long Sword, Battle Axe, Flail',
    tags: long_sword_tags
  },
  long_sword: {
    name: 'Long Sword',
    tags: long_sword_tags
  },
  battle_axe: {
    name: "Battle Axe",
    tags: long_sword_tags
  },
  flail: {
    name: 'Flail',
    tags: long_sword_tags
  },
  halberd: {
    tags: ['reach', {damage: '+1'}, 'two_handed', {coins: 9}, {weight: 2}]
  },
  rapier: {
    tags: ['close', 'precise', {coins: 25}, {weight: 1}]
  },
  dueling_rapier: {
    tags: ['close', {piercing: 1}, 'precise', {coins: 50}, {weight: 2}]
  },

  /* Armor */
  chainmail: {
    tags: [{armor: 1}, 'worn', {coins: 10}, {weight: 1}]
  },
  scale_armor: {
    tags: [{armor: 2}, 'worn', {weight: 3}]
  },
  scale_mail: {
    tags: [{armor: 2}, 'worn', 'clumsy', {coins: 50}, {weight: 3}]
  },
  plate: {
    tags: [{armor: 3}, 'worn', 'clumsy', {coins: 350}, {weight: 4}]
  },
  shield: {
    tags: [{armor: '+1'}, {coins: 15}, {weight: 2}]
  },
  leather_armor: {
    tags: [{armor: 1}, 'worn', {coins: 10}, {weight: 1}]
  },
  hide_armor: {
    tags: [{armor: 1}, {weight: 1}]
  },
  wooden_shield: {
    tags: [{armor: '+1'}, {weight: 1}]
  },
  /* Dungeon Gear */
  adventuring_gear: {
    tags: [{uses: 5}, {coins: 20}, {weight: 1}],
    description: 'Adventuring gear is a collection of useful mundane items such as chalk, poles, spikes, ropes, etc. When you rummage through your adventuring gear for some useful mundane item, you find what you need and mark off a use.'
  },
  bandages: {
    tags: [{uses: 3}, 'slow', {coins: 5}, {weight: 0}],
    description: 'When you have a few minutes to bandage someone else’s wounds, heal them of 4 damage and expend a use.'
  },
  poultices_and_herbs: {
    tags: [{uses: 2}, 'slow', {coins: 10}, {weight: 1}],
    description: 'When you carefully treat someone’s wounds with poultices and herbs, heal them of 7 damage and expend a use.'
  },
  healing_potion: {
    tags: [{coins: 50}, {weight: 0}],
    description: 'When you drink an entire healing potion, heal yourself of 10 damage or remove one debility, your choice.'
  },
  keg_of_dwarven_stout: {
    description: 'When you open a keg of dwarven stout and let everyone drink freely, take +1 to your {{move 'carouse'}} roll. If you drink a whole keg yourself, you are very, very drunk.',
    tags: [{coins: 10}, {weight: 4}]
  },
  bag_of_books: {
    tags: [{uses: 5}, {coins: 10}, {weight: 2}],
    plural_name: 'bags of books',
    description: 'When your bag of books contains just the right book for the subject you’re spouting lore on, consult the book, mark off a use, and take +1 to your roll.'
  },
  antitoxin: {
    tags: [{coins: 10}, {weight: 0}],
    description: 'When you drink antitoxin, you’re cured of one poison affecting you.'
  },
  dungeon_rations: {
    name: 'dungeon rations',
    plural_name: 'dungeon rations',
    tags: ['ration', {uses: 5}, {coins: 3}, {weight: 1}],
    description: 'Not tasty, but not bad either.'
  },
  personal_feast: {
    tags: ['ration', {uses: 1}, {coins: 10}, {weight: 1}],
    description: 'Ostentatious to say the least.'
  },
  dwarven_hardtack: {
    tags: ['requires Dwarf', 'ration', {uses: 7}, {coins: 3}, {weight: 1}],
    plural_name: 'dwarven hardtack',
    description: 'Dwarves say it tastes like home. Everyone else says it tastes like home, if home is a hog farm, and on fire.'
  },
  elven_bread: {
    tags: ['ration', {uses: 7}, {coins: 10}, {weight: 1}],
    description: 'Only the greatest of elf-friends are treated to this rare delicacy.'
  },
  halfling_pipeleaf: {
    tags: [{uses: 6}, {coins: 5}, {weight: 0}],
    description: "When you share halfling pipeleaf with someone, expend two uses and take +1 forward to {{move 'parley'}} with them."
  },
  oil_of_tagit: {
    tags: ['dangerous', 'applied', {coins: 15}, {weight: 0}],
    description: 'The target falls into a light sleep.'
  },
  bloodweed: {
    tags: ['dangerous', 'touch', {coins: 12}, {weight: 0}],
    description: 'Until cured, whenever the afflicted rolls damage, they roll an additional d4 and subtract that result from their normal damage.'
  },
  goldenroot: {
    tags: ['dangerous', 'applied', {coins: 20}, {weight: 0}],
    description: 'The target treats the next creature they see as a trusted ally, until proved otherwise.'
  },
  serpents_tears: {
    name: "Serpent's Tears",
    tags: ['dangerous', 'touch', {coins: 10}, {weight: 0}],
    description: 'Anyone dealing damage against the target rolls twice and takes the better result.'
  }
}

var magic_items = {
  /* MAGIC ITEMS*/
  "argo_thaan_holy_avenger": {
    "name": "Argo-Thaan, Holy Avenger",
    "tags": [
      "close",
      {
        "weight": "2"
      }
    ],
    "key": "argo_thaan_holy_avenger",
    "description": "There are many swords in this world, but there is only one Argo-thaan. It is a blade of gold, silver and light, revered as a holy relic by all orders and religions for whom Good rings true. Its touch is a blessing and to many, the sight of it brings tears of joy.\nIn the hands of a paladin, it strikes true and strong. A paladin wielding it increases their damage die to d12 and has access to every paladin move. As well, Argo-thaan can harm any creature of Evil, regardless of any defenses it may have. No Evil creature may touch it without suffering agony. In the hands of any non-paladin, it is merely a sword, heavier and more cumbersome than most—it gains the awkward tag.\nArgo-thaan, while not intelligent, will forever be drawn to a cause of true Good, like iron to a magnet."
  },
  "arrows_of_acheron": {
    "name": "Arrows of Acheron",
    "tags": [
      {
        "ammo": "1"
      },
      {
        "weight": "1"
      }
    ],
    "key": "arrows_of_acheron",
    "description": "Crafted in darkness by a blind fletcher, these arrows can find their target in even the deepest darkness. An archer may fire them blind, in the dark, with his eyes bound by heavy cloth and still be assured of a clean shot. If the light of the sun ever touches the arrows, however, they come apart like shadows and dust."
  },
  "axe_of_the_conqueror_king": {
    "name": "Axe of the Conqueror-King",
    "tags": [
      "close",
      {
        "weight": "1"
      }
    ],
    "key": "axe_of_the_conqueror_king",
    "description": "It is crafted of shining steel, glowing with a golden light and imbued with mythical powers of authority. When you bear the axe, you become a beacon of inspiration to all you lead. Any hirelings in your employ have +1 Loyalty, no matter the quality of your leadership."
  },
  "barb_of_the_black_gate": {
    "name": "Barb of the Black Gate",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "barb_of_the_black_gate",
    "description": "A nail or spike, twisted and forever cold, said to have been pried from the Gates of Death. When hammered into a corpse, it disappears and ensures that corpse will never be risen again—no magic short of that of Death himself can reignite the flame of life (natural or otherwise) in the body."
  },
  "bag_of_holding": {
    "name": "Bag of Holding",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "bag_of_holding",
    "description": "A bag of holding is larger on the inside than the outside, it can contain an infinite number of items, and its weight never increases. When you try to retrieve an item from a bag of holding, roll+WIS. ✴On a 10+, it’s right there. ✴On a 7-9, choose one:\nYou get the exact item, but it takes a while\n\nYou get a similar item of the GM’s choice, but it only takes a moment\nNo matter how many items it contains, a bag of holding is always 0 weight."
  },
  "the_burning_wheel": {
    "name": "The Burning Wheel",
    "tags": [
      {
        "weight": "2"
      }
    ],
    "key": "the_burning_wheel",
    "description": "An ancient wooden wheel, as might appear on a war-wagon, banded with steel. On a glance, it appears to be nothing special—many spokes are shattered and the thing seems mundane. Under the scrutiny of magic or the eyes of an expert, its true nature is revealed: the Burning Wheel is a gift from the God of Fire and burns with his authority.\nWhen you hold The Burning Wheel and speak a god’s name, roll+CON. ✴On a 7+, the god you name takes notice and grants you an audience. An audience with a god is not without a price: on a 10+, you choose one of your stats and reduce it to the next lowest modifier (for example, a 14 is +1, so it would be reduced to 12, a +0). ✴On a 7–9, the GM chooses which stat to reduce.\nOnce used, the Burning Wheel ignites and burns with brilliant light. It does not confer any protection from those flames, nor does it provide any bonus to swimming."
  },
  "captain_blighs_cornucopia": {
    "name": "Captain Bligh’s Cornucopia",
    "tags": [
      {
        "weight": "1"
      }
    ],
    "key": "captain_blighs_cornucopia",
    "description": "A brass naval horn, curled and ornate, carved with symbols of the gods of Plenty. When blown, in addition to sound, the horn spills forth food. Enough to feed a meal to everyone who hears its sound."
  },
  "the_carcosan_spire": {
    "name": "The Carcosan Spire",
    "tags": [
      "reach",
      "thrown",
      {
        "weight": "3"
      }
    ],
    "key": "the_carcosan_spire",
    "description": "None know from whence this spear of twisted white coral comes. Those who bear it too long find their minds full of alien dreams and begin to hear the strange thoughts of the Others. None are impervious. Used against any “natural” target (men, goblins, owlbears and the like) the Spire acts as a mere mortal spear. Its true purpose is to do harm to those things whose strange natures protect them against mundane weapons. Used thus, the Spire can wound foes otherwise invulnerable to harm. The wielder will recognize these twisted foes on sight—the Spire knows its own."
  },
  "cloak_of_silent_stars": {
    "name": "Cloak of Silent Stars",
    "tags": [
      {
        "weight": "1"
      }
    ],
    "key": "cloak_of_silent_stars",
    "description": "A cape of rich black velvet outside and sparkling with tiny points of light within, this cloak bends fate, time and reality around it to protect the wearer, who may {{move 'defy_danger'}} with whatever stat they like. To do this, the wearer invokes the cloak’s magic and their player describes how the cloak helps “break the rules.” They can deflect a fireball with CHA by convincing it they deserve to live or elude a fall by applying the mighty logic of their INT to prove the fall won’t hurt. The cloak makes it so. It can be used once for each stat before losing its magic."
  },
  "coin_of_remembering": {
    "name": "Coin of Remembering",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "coin_of_remembering",
    "description": "What appears, at a glance, to be a simple copper coin is, in truth, an enchanted coin. Its bearer can, at any time, redeem it to know immediately one fact that has been forgotten. The coin vanishes thereafter. It does not have to be a thing forgotten by the bearer, but it cannot be “known.” Interpretation of this stipulation is left to the gods. If the coin is unsuccessful, it will still paint an image in the mind’s eye of someone or something that does remember what was sought."
  },
  "common_scroll": {
    "name": "Common Scroll",
    "tags": [
      {
        "use": "1"
      },
      {
        "weight": "0"
      }
    ],
    "key": "common_scroll",
    "description": "A common scroll has a spell inscribed on it. The spell must be castable by you or on your class’s spell list for you to be able to cast it. When you cast a spell from a scroll, the spell takes effect, simple as that."
  },
  "devilsbane_oil": {
    "name": "Devilsbane Oil",
    "tags": [
      {
        "use": "1"
      },
      {
        "weight": "0"
      }
    ],
    "key": "devilsbane_oil",
    "description": "A holy oil, created in limited supply by a mute sect of mountain monks whose order protected humanity from the powers of the Demon Pits in ancient epochs. Only a few jars remain. When applied to any weapon and used to strike a denizen of any outer plane, the oil undoes the magic that binds that creature. In some cases, this will return it to its home. In others, it merely undoes any magic controlling it. The oil stays on the weapon for a few hours before it dries and flakes away.\nIf applied to the edges of a doorway or drawn in a circle, the oil will repel creatures whose home is any of the outer planes. They cannot pass across it. The oil lasts for one full day before it soaks in or evaporates."
  },
  "earworm_wax": {
    "name": "Earworm Wax",
    "tags": [
      {
        "use": "1"
      },
      {
        "weight": "0"
      }
    ],
    "key": "earworm_wax",
    "description": "A yellowish candle. Seems never to burn out and the light it casts is strange and weak. Its wax is always cool, too. Drip the wax into the ear of a target and gain 3 hold. Spend that hold and ask your target a question. They find themselves telling you the whole truth, despite themselves. The consequences, after the fact? Those are up to you to deal with."
  },
  "the_echo": {
    "name": "The Echo",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "the_echo",
    "description": "A seemingly empty bottle. Once unstoppered, the whispers of another plane resound once and fall silent. In the silence, the bearer learns in his soul the coming of one great danger and how he can avoid it. At any point after you use the Echo, you can ignore the results of any single die roll—yours or another player’s—and roll again. Once opened, the Echo is released and gone forever."
  },
  "the_epoch_lens": {
    "name": "The Epoch Lens",
    "tags": [
      {
        "weight": "1"
      }
    ],
    "key": "the_epoch_lens",
    "description": "An archmage, old and too frail to leave his tower, crafted this intricate and fragile device of glass and gold to examine the histories and relics he so loved. Looking at an object through the lens reveals visions of who made it and where it came from."
  },
  "farsight_stone": {
    "name": "Farsight Stone",
    "tags": [
      {
        "weight": "1"
      }
    ],
    "key": "farsight_stone",
    "description": "Swirling clouds fill this smoky orb and those in its presence often hear strange whispers. In ancient times, it was part of a network of such stones, used to communicate and surveil across great distances. When you gaze into the stone, name a location and roll+WIS. ✴On a 10+, you see a clear vision of the location and can maintain it as long as you concentrate on the orb. ✴On a 7–9, you still see the vision, but you draw the attention of some other thing (an angel, a demon, or the holder of another Farsight stone) that uses the stone to surveil you, as well."
  },
  "the_fiasco_codex": {
    "name": "The Fiasco Codex",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "the_fiasco_codex",
    "description": "A thick tome, said to be penned in the blood of poor fools and robber-barons by some demon prince possessed of dark humor, this tome details tales and stories of those whose ambition overwhelmed their reason. Reading from this tome teaches one the value of clear-headedness but leaves a sense of dread behind. When you read from the Fiasco Codex, Roll+WIS. ✴On a 10+, ask two of the questions below. ✴On a 7–9, ask one.\nWhat is my greatest opportunity, right now?\n\nWho can I betray to gain an advantage?\n\nWho is an ally I should not trust?\nThe codex gives up its answers only once to each reader and takes 2 to 3 hours to read."
  },
  "flask_of_breath": {
    "name": "Flask of Breath",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "flask_of_breath",
    "description": "A simple thing, but useful when you need a breath of fresh air. The flask appears empty but cannot be filled, anything added to it simply spills out. This is because the flask is eternally full of air. If placed underwater, it will bubble forever. If pressed to the mouth, one can breathe normally—smoke is no concern, for example. I’m sure you’ll find all sorts of unusual uses for it."
  },
  "folly_held_aloft_the_wax_wings_a_huge_mistake": {
    "name": "Folly Held Aloft, The Wax Wings, A Huge Mistake",
    "tags": [
      {
        "weight": "1"
      }
    ],
    "key": "folly_held_aloft_the_wax_wings_a_huge_mistake",
    "description": "Who hasn’t always wanted to soar the pretty blue sky? In an attempt to grant the wishes of land-bound folk, these great magical wings were created. Known by many names and crafted by as many mages, they commonly take the shape of the wings of whatever local birds hold affection. Worn by means of a harness or, in some dire cases, a surgical procedure.\nWhen you take to the air with these magical wings, roll+DEX. ✴On a 10+, your flight is controlled and you may stay aloft as long as you like. ✴On a 7–9, you make it aloft but your flight is short or erratic and unpredictable, your choice. ✴On a 6-, you make it aloft, but the coming-down part and everything between is up to the GM."
  },
  "immovable_rod": {
    "name": "Immovable Rod",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "immovable_rod",
    "description": "A funny metal rod with a button on it. Press the button and the rod just sticks. It freezes in place—in midair, standing up or lying down. It can’t be moved. Pull it, push it, try as hard as you like, the rod stays. Maybe it can be destroyed, maybe it can’t. Push the button again and it’s free—take it along with you. Might be useful to have such a stubborn thing along. "
  },
  "infinite_book": {
    "name": "Infinite Book",
    "tags": [
      {
        "weight": "1"
      }
    ],
    "key": "infinite_book",
    "description": "This book contains an infinite number of pages in a finite space. With no limit to the pages, everything that ever was, is, or will be is contained somewhere in the book. Luckily the index is great.\nWhen you {{move 'spout_lore'}} while consulting the book you gain an extra clause: On a 12+, the GM will give a solution to a problem or situation you’re in."
  },
  "inspectacles": {
    "name": "Inspectacles",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "inspectacles",
    "description": "Rough-hewn glass in wooden frames. Dinged up and barely held together, they somehow allow the wearer to see much more than their naked eyes might. When you {{move 'discern_realities'}} wearing these gifted lenses, you get to bend the rules a little. On a roll of 10+, ask any three questions you like. They don’t have to be on the list. As long as sight could give you answers, the GM will tell you what you want to know."
  },
  "the_kumeh_maneuver": {
    "name": "The Ku’meh Maneuver",
    "tags": [
      {
        "weight": "1"
      }
    ],
    "key": "the_kumeh_maneuver",
    "description": "A great, leathery tome worn shiny by the hands of a hundred great generals, this book is often passed from warrior to warrior, from father to son along the great battle lines that have divided Dungeon World’s past. Anyone reading it may, upon finishing for the first time, roll+INT. ✴On a 10+, hold 3. ✴On a 7-9, hold 1. You may spend your hold to advise a companion on some matter of strategic or tactical significance. This advice allows you to, at any time, regardless of distance, roll to aid them on any one roll. On a miss, the GM can hold 1 and spend it to apply -2 to any roll of yours or the poor sap who listened to your advice."
  },
  "lamented_memento": {
    "name": "Lamented Memento",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "lamented_memento",
    "description": "Taking the form of a single lock of bright red hair, bound in a black ribbon and immune to the ravages of time, the Lamented Memento bears a grim enchantment. In it are the memories and emotions of a girl who dealt with Death at the Black Gates so many times that, in the end, they fell in love and she left the world to be with him for a time. Her memory protects the wielder. If he finds himself at the Gates, the Memento can be traded for an automatic result of 10+ on the Last Breath move."
  },
  "lodestone_shield": {
    "name": "Lodestone Shield",
    "tags": [
      {
        "armor": "+1"
      },
      {
        "weight": "1"
      }
    ],
    "key": "lodestone_shield",
    "description": "What mixed-up dummy made this? Shields are meant to repel metal, not draw it in! Emblazoned with a lion rampant, the Lodestone Shield has the power to pull blades and arrows to it. When you {{move 'defend'}} against enemies using metal weapons you can spend one hold, per target, to disarm them. Also, sometimes you’ll find a handful of loose change stuck to it."
  },
  "map_of_the_last_patrol": {
    "name": "Map of the Last Patrol",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "map_of_the_last_patrol",
    "description": "An ancient order of brave rangers once patrolled the land, protecting villages and warning kings and queens of encroaching danger. They’re long gone, now, but their legacy remains. This map, when marked with the blood of a group of people, will always show their location—so long as they remain within the bounds of the map. "
  },
  "neds_head": {
    "name": "Ned’s Head",
    "tags": [
      {
        "weight": "1"
      }
    ],
    "key": "neds_head",
    "description": "An old skull, missing its jaw and very much worse-for-wear. The skull remembers the folly of its former owner—a man with more honor than sense. Once per night, the owner of the skull can ask “Who has it in for me?” and the skull will give up one name in a sad, lonely voice. If the owner of the skull is ever killed, it disappears surreptitiously. No one knows where it might turn up next."
  },
  "nightsiders_key": {
    "name": "Nightsider’s Key",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "nightsiders_key",
    "description": "This key unlocks any door for you, provided you don’t belong where you intend to go. So long as you do nothing that would alert another to your presence (remaining unheard, unseen and unnoticed) and takes nothing more than your memories out with you, the key’s magic will prevent your intrusion from ever being discovered. It’s like you were never there at all."
  },
  "sacred_herbs": {
    "name": "Sacred Herbs",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "sacred_herbs",
    "description": "The sacred herbs, collected and prepared by an order of lost wizard-monks, can be found in bundles with two or three uses to them. Kept dry, they last indefinitely. When smoked in a pipe or consumed in an incense burner and the thick, blue smoke inhaled, these herbs will grant you strange visions of faraway places and distant times. If you focus your will on a particular person, place or thing, the herbs will respond: roll+WIS. ✴On a 10+, the vision is clear and useful—yielding some valid information. ✴On a 7–9, the vision is about the thing desired, but is unclear, fraught with metaphor or somehow difficult to understand. ✴On a miss, the GM will ask you, “What is it you fear most?” You must answer honestly, of course."
  },
  "the_sartar_duck": {
    "name": "The Sartar Duck",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "the_sartar_duck",
    "description": "An odd, hand-carved wooden duck. Who would make such a funny thing? While you bear it, you find yourself an exceptionally gifted storyteller—no matter the language, you can make yourself and your story clear to any audience. They will understand your meaning, if not your words."
  },
  "tears_of_annalise": {
    "name": "Tears of Annalise",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "tears_of_annalise",
    "description": "Cloudy red gemstones the size of a thumbnail, the Tears of Annalise are always found in pairs. When swallowed by two different people, they bind the swallowers together—when either feels strong emotions (particularly sadness, loss, fear or desire) the other feels it, as well. The effects last until one spills the blood of the other."
  },
  "teleportation_room": {
    "name": "Teleportation Room",
    "tags": [
      "slow"
    ],
    "key": "teleportation_room",
    "description": "James Ninefingers, eccentric genius mage, created these room-sized magical apparati. A stone chamber etched with runes and scribblings, glowing with a faint blue light. When you enter and say aloud the name of a location, roll+INT. ✴On a 10+, you arrive exactly where you’d intended. ✴On a 7–9, the GM chooses a safe location nearby. ✴On a miss, you end up someplace. Maybe it’s nearby? It’s definitely not safe. Strange things sometimes happen to those who bend time and space with these devices."
  },
  "timunns_armor": {
    "name": "Timunn’s Armor",
    "tags": [
      {
        "armor": "1"
      },
      {
        "weight": "1"
      }
    ],
    "key": "timunns_armor",
    "description": "A stealthy suit of armor, it appears as many things to many people and blends in with appropriate apparel. The wearer always seems the height of fashion to any who gaze upon him."
  },
  "titus_truthful_tallow": {
    "name": "Titus’ Truthful Tallow",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "titus_truthful_tallow",
    "description": "A candle of ivory- and copper-colored tallow with a wick of spun silver. When lit, none upon whom its light falls is able to tell a lie. They may keep silent or dissemble but when asked a question directly, they can speak naught but truth."
  },
  "tricksy_rope": {
    "name": "Tricksy Rope",
    "tags": [
      {
        "weight": "1"
      }
    ],
    "key": "tricksy_rope",
    "description": "A rope that listens. Does tricks, too, like a smart and more obedient snake might. Tell it “Coil” or “Slack” or “Come here, rope” and it will. "
  },
  "the_sterling_hand": {
    "name": "The Sterling Hand",
    "tags": [
      {
        "weight": "0"
      }
    ],
    "key": "the_sterling_hand",
    "description": "Crafted by dwarven whitesmiths, this mirrored-metal hand is deeply scored with runes of power and rejuvenation. Meant to replace wounded or destroyed limbs from mining accidents, the Sterling Hand bonds to the wound, old or new, and is strong and stout. It can be used as a weapon (Near range) and is made of pure enough silver to harm creatures affected by such."
  },
  "velliuss_gauntlets": {
    "name": "Vellius’s Gauntlets",
    "tags": [
      {
        "weight": "1"
      }
    ],
    "key": "velliuss_gauntlets",
    "description": "Crafted in the name of Vellius the Clumsy, Vellius the Butter-Fingered, Vellius the Clod, these gloves of simple cloth prevent you from dropping any object you don’t intent to. You cannot be disarmed and will not fall from any rope or ladder, for example. This item can get very messy if you have something strong pulling at your legs while you grip onto something solid."
  },
  "violation_glaive": {
    "name": "Violation Glaive",
    "tags": [
      "reach",
      {
        "weight": "2"
      }
    ],
    "key": "violation_glaive",
    "description": "A legendary blade, said to have been thrust backwards in time from some grim future, the violation glaive is crafted of strange green iron. The blade strikes at the mind of those it wounds, as well as the body. When you {{move 'hack_and_slash'}} on a 10+ you have an additional option: you can deal your normal damage, let them counterattack you, and instill the emotion of your choice (maybe fear, reverence, or trust)."
  },
  "vorpal_sword": {
    "name": "Vorpal Sword",
    "tags": [
      "close",
      {
        "piercing": "3"
      },
      {
        "weight": "2"
      }
    ],
    "key": "vorpal_sword",
    "description": "Snicker-snack and all that. Sharp as anything, this simple-seeming sword means to separate one thing from another—the limb from the body or folk from their lives. When you deal damage with the Vorpal Sword, your enemy must choose something (an item, an advantage, a limb) and lose it, permanently."
  }
}

for(var key in magic_items) {
  items[key] = magic_items[key];
  items[key].name = items[key].name || helpers.keyToName(key);
}

for(var key in items) {
  items[key].name = items[key].name || helpers.keyToName(key);
  items[key].key = key;
}

module.exports = items
/*
Fine Bow; near, far, 60 coins, 2 weight
Hunter’s Bow; near, far, 100 coins, 1 weight
Crossbow; near, +1 damage, reload, 35 coins, 3 weight
Bundle of Arrows; 3 ammo, 1 coin, 1 weight
Elven Arrows; 4 ammo, 20 coins, 1 weight
Club, Shillelagh; close, 1 coin, 2 weight
Staff; close, two_handed, 1 coin, 1 weight
Dagger, Shiv, Knife; hand, 2 coins, 1 weight
Throwing Dagger; thrown, near, 1 coin, 0 weight
Short Sword, Axe, Warhammer, Mace; close, 8 coins, 1 weight
Spear; reach, thrown, near, 5 coins, 1 weight
Long Sword, Battle Axe, Flail; close, +1 damage, 15 coins, 2 weight
Halberd; reach, +1 damage, two_handed, 9 coins, 2 weight
Rapier; close, precise, 25 coins, 1 weight
Dueling Rapier; close, 1 piercing, precise, 50 coins, 2 weight
}
*/
