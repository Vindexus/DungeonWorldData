# Dungeon World Data
A NodeJS project to put all Dungeon World's data into a JSON file and an npm module.

## Getting the JSON
Raw JSON: [link.json](#)  
Basic JSON: [link2.json](#)

## Getting the Module
`npm install dungeonworld-data`


### Examples
See [this project](#) for a bunch of example NodeJS scripts that use the JSON data.

```
var dw = require('dungeonworld-data')
console.log("Bard base HP: " + dw.basicData.classes.bard.base_hp)
```

## Compiled from Source
The JSON is compiled from the files and folders in the `source` folder using the npm module I've written called `rpgparser-data`.

## Raw vs Basic
The raw JSON file includes the unparsed handlebar helpers such as `Take +1 forward to {{move 'defy_danger'}}`.  
The basic JSON file has had those parsed through basic helpers, so it would become `Take +1 forward to Defy Danger`.

## Preview/Excerpt of Data
This is a preview of the **structure**; the actual data has more text.
```
{ 
  classes: {
    bard: {
      name: 'Bard',
      description: 'The poems say an adventurer’s life is all open road.'
      base_hp: 6,
      base_load: 9,
      starting_moves: [
        {
          name: 'Arcane Art',
          key: 'arcane_art'
          description: "When you weave magic into music, roll+CHA and pick one\n - Heal an ally\n - Give an ally +1 forward"
        }
      ]
    }
  },
  tags: {
    near: {
      name: 'Near',
      description: 'It’s useful for attacking if you can see the whites of their eyes.',
    }
  },
  equipment: {
    ragged_bow: {
      name: 'Ragged Bow',
      tags: ['near']
    }
  },
  moves: {
    spout_lore: {
      key: 'spout_lore',
      name: 'Spout Lore',
      description: 'When you consult your accumulated knowledge about something, roll+Int. On a 10+, the GM will tell you something interesting and useful about the subject relevant to your situation. On a 7–9, the GM will only tell you something interesting—it’s on you to make it useful. The GM might ask you “How do you know this?” Tell them the truth, now.'
    }
  }
}
```
