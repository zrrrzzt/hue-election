[![Build Status](https://travis-ci.org/zrrrzzt/hue-election.svg?branch=master)](https://travis-ci.org/zrrrzzt/hue-election)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# hue-election

This was just a fun hack to light (muahahaha) up the Norwegian election. 
It will change the color of a Philips Hue lightbulb to red or blue depending on which side get the highest number of mandates.

# Setup

To make this work you'll need the IP for your bridge, a user for the bridge and the number for the lightbulb you will use.

If you have all this just update the values in [config.json](config.json).

If you don't know there is still hope.

## Find bridgeip and add a user

First run the setup script

```
$ npm run setup
```

This will result in an error. Now push the link-button on your bridge and rund the script again.

```
$ npm run setup
```

Add the values to [config.json](config.json) and move on.

## Find your lightbulbs

Run the list script

```
$ npm run list
```

Find the light you want and add it to [config.json](config.json)

You are now ready to start.

# Start

```
$ npm start
```

As long as it runs the script will check the results every config.pollIntervalMinutes (defaults to 10)

## License

[MIT](LICENSE)

