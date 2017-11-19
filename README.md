# Dungeon World Data
A NodeJS project to put all Dungeon World's data into a JSON file and an npm module.

## Getting the JSON
Raw JSON: https://raw.githubusercontent.com/Vindexus/DungeonWorldData/0.0.8/json/game_data_raw.json  
Basic JSON: https://raw.githubusercontent.com/Vindexus/DungeonWorldData/0.0.8/json/game_data_basic.json

## Raw vs Basic
The raw JSON file includes the unparsed handlebar helpers such as `Take +1 forward to {{move 'defy_danger'}}`.  
The basic JSON file has had those parsed through basic helpers, so it would become `Take +1 forward to Defy Danger`.

## Getting the Module
`npm install dungeonworld-data`

## Example Code

```
var dw = require('dungeonworld-data')
console.log("Bard base HP: " + dw.basicData.classes.bard.base_hp)
```

## Example Projects

### [NodeJS Sample Scripts](https://www.github.com/Vindexus/dw-data-scripts)
Some simple command line tools for grabbing Dungeon World data.

### [Discord Bot](https://www.github.com/Vindexus/DungeonWorldDiscordBot)
A bot for [Discord](http://www.discordapp.com) that responds to commands with Dungeon World content.


## Compiled from Source
The JSON is compiled from the files and folders in the `source` folder using the npm module I've written called `rpgparser-data`.


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
# Contributing
Clone this project to your computer and start adding files into the `source` folder to add content. You'll need to install and run the proper NodeJS files to get it to compile.

```
cd /path/to/where/you/want/to/work
git clone git@github.com:Vindexus/DungeonWorldData .
npm install
npm run watch
```

When you do `npm run watch` it will watch for any changes to source files and automatically update the two JSON files. Create a new pull request when you want to add the data you've added.
