# nuxt-tslint

Nuxt module for quickly adding tslint to your project

## Installation

- Install [nuxt-ts](https://github.com/hmsk/nuxt-ts) or [nuxt-ts-module](https://github.com/chanlito/nuxt-ts-module) to add Typescript to your Nuxt project

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
        tsconfig: path.join(__dirname, 'tsconfig.custom.json'),
        tslint: path.join(__dirname, 'tslint.custom.json')
    }]
  ]
}
```

or configure it within the typescript object

```js
{
  // ...
  modules: ['nuxt-tslint'],
  typescript: {
    tsconfig,
    tslint
  },
  // ...
}
```

## Options

- `tsconfig: string`
  - The path for the custom `tsconfig` file
- `tslint: string`
  - The path for the custom `tslint` file

## License

[MIT License](./LICENSE)

Copyright (c) Sascha Braun
