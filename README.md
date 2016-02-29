# Phaser Shim

A shim to make Phaser HTML5 game engine from NPM work with Webpack, and build properly.

> [Phaser doesn't work with Webpack and require](https://github.com/photonstorm/phaser/issues/1974)

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

or ES6:

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

or several per module:

```js
import {Game, State} from 'phaser-shim';
```

or TypeScript:

```typescript
/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts" />

declare module 'phaser-shim' {
  export = Phaser;
}
```

### Webpack

```js
// webpack.config.js

module: {
  // ...
  loaders: [{
    loader: 'script',// script-loader
    test: /(pixi|phaser).js/
  }],
  // ...
}
```

## Development

If you want to use other Phaser version (old or new) in yourself:

1. Fork this repo and git clone to local.
2. `npm install` with node v4.x
3. `npm run build` to building `dist/pixi` and `dist/phaser`
4. now you can `require` or `import` your `phaser-shim`

## Contributors

- @AnimaMundi