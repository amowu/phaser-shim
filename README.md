# Phaser Shim

A shim to make Phaser HTML5 game engine from NPM work with Webpack, and build properly.

> [Phaser doesn't work with Webpack and require](photonstorm/phaser#1974)

## Installation

```sh
npm install phaser-shim --save
```

## Usage

### Module

```js
// game.js

require('phaser-shim');

var game = new Phaser.Game(800, 600);
```

or ES6

```js
// Game.js

import 'phaser-shim';

class Game extends Phaser.Game {
  constructor (width, height) {
    super(width, height);
  }
}
```

```js
// game.js

import Game from './Game';

const game = new Game(800, 600);
```

### Webpack

```js
// webpack.config.js

module: {
  // ...
  loaders: [{
    loader: 'script',// script-loader
    test: /(pixi\.js|phaser\.js)/
  }],
  // ...
}
```