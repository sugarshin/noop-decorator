# noop-decorator

[![CircleCI][circleci-image]][circleci-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[![Dependency Status][david-image]][david-url]
[![Devdependency Status][david-dev-image]][david-dev-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

Decorator methods to noopify

```sh
yarn add -D noop-decorator
```

## Usage

```js
import noopDecorator from 'noop-decorator'

class A {
  @noopDecorator
  m() { ... }
  @noopDecorator
  static sm() { ... }
}
A.sm() // noop
const a = new A
a.m() // noop
```

### Argument

{Function|any}

```js
const comparator = () => 1 === 1
class A {
  @noopDecorator(comparator)
  m0() { ... }
  @noopDecorator(false)
  m1() { ... }
}
const a = new A
a.m0() // noop
a.m1() // run
```

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## License

[MIT][license-url]

© sugarshin

[circleci-image]: https://circleci.com/gh/sugarshin/noop-decorator/tree/master.svg?style=svg&circle-token=e41eafea4fc95c44f0be00be4aef0c18954891df
[circleci-url]: https://circleci.com/gh/sugarshin/noop-decorator/tree/master
[coveralls-image]: https://coveralls.io/repos/github/sugarshin/noop-decorator/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/sugarshin/noop-decorator?branch=master
[npm-image]: https://img.shields.io/npm/v/noop-decorator.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/noop-decorator
[david-image]: https://david-dm.org/sugarshin/noop-decorator.svg?style=flat-square
[david-url]: https://david-dm.org/sugarshin/noop-decorator
[david-dev-image]: https://david-dm.org/sugarshin/noop-decorator/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/sugarshin/noop-decorator#info=devDependencies
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
