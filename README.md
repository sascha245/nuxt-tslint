# nuxt-tslint

Nuxt module for quickly adding tslint to your project

## Installation

- Install [nuxt-ts](https://github.com/hmsk/nuxt-ts) or [nuxt-ts-module](https://github.com/chanlito/nuxt-ts-module) to add Typescript to your Nuxt project

- Install `tslint` and setup your `tslint.json`

- Install `nuxt-tslint`

- Add `nuxt-tslint` to the `modules` section on `nuxt.config.js`

```js
{
  modules: [
    // ...
    'nuxt-tslint',
  ]
}
```

with options

```js
{
  modules: [
    // ...
    ['nuxt-tslint', {
        configFile: path.join(__dirname, 'tslint.custom.json')
        tsConfigFile: path.join(__dirname, 'tsconfig.custom.json'),
        formatter: 'stylish'
    }]
  ]
}
```

or configure it within the tslint object

```js
{
  // ...
  modules: ['nuxt-tslint'],
  tslint: {
    configFile: path.join(__dirname, 'tslint.custom.json')
    tsConfigFile: path.join(__dirname, 'tsconfig.custom.json'),
    formatter: 'stylish'
  },
  // ...
}
```

## Options

See [tslint-loader](https://github.com/wbuchwalter/tslint-loader) options

## License

[MIT License](./LICENSE)

Copyright (c) Sascha Braun
