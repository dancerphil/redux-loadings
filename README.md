# redux-loadings [renamed to region-shortcut!!!](https://github.com/regionjs/region-shortcut)

[![version](https://img.shields.io/npm/v/redux-loadings.svg?style=flat-square)](http://npm.im/redux-loadings)
[![npm downloads](https://img.shields.io/npm/dm/redux-loadings.svg?style=flat-square)](https://www.npmjs.com/package/redux-loadings)
[![codecov](https://codecov.io/gh/dancerphil/redux-loadings/branch/develop/graph/badge.svg)](https://codecov.io/gh/dancerphil/redux-loadings)
[![MIT License](https://img.shields.io/npm/l/redux-loadings.svg?style=flat-square)](http://opensource.org/licenses/MIT)

A replacement tool of `redux` to handle sync & async action flow. Extremely simple API!

English | [中文](https://github.com/regionjs/region-core/blob/master/docs/README-zh_CN.md)

| Package | Version | Docs | Description |
| --- | --- | --- | --- |
| [region-core](https://github.com/regionjs/region-core) | [![version](https://img.shields.io/npm/v/region-core.svg?style=flat-square)](http://npm.im/region-core) | [![](https://img.shields.io/badge/API-markdown-blue.svg?style=flat-square)](https://github.com/regionjs/region-core/blob/master/docs/Document.md) | The core of Region: set, load & connect |
| [region-shortcut](https://github.com/regionjs/region-shortcut) | [![version](https://img.shields.io/npm/v/region-shortcut.svg?style=flat-square)](http://npm.im/region-shortcut) | [![](https://img.shields.io/badge/API-markdown-blue.svg?style=flat-square)](https://github.com/regionjs/region-shortcut/blob/master/README.md) | Wrapped core with global Provider, set, load & connect |
| [region-form](https://github.com/regionjs/region-form) | [![version](https://img.shields.io/npm/v/region-form.svg?style=flat-square)](http://npm.im/region-form) | [![](https://img.shields.io/badge/API-markdown-blue.svg?style=flat-square)](https://github.com/regionjs/region-form/blob/master/README.md) | RegionForm extends Region: bindWith any ant-design form item |

## Get Started

```bash
npm i region-shortcut
// or
npm i region-core
```

Then create your Component

```jsx harmony
import { connectWith } from 'region-shortcut';
import { fetchUser } from './fetch'; // somewhere with axios

load('user', fetchUser);

const Display = ({ user }) => <div>{user}</div>

export default connectWith('user', Display);
```

or

```jsx harmony
import { connectWith } from 'region-shortcut';
import { fetchUser, fetchFollower } from './fetch'; // somewhere with axios

load('user', fetchUser);
const handleClick = () => load('follower', fetchFollower);

const Display = ({ loading, error, user, follower }) => (
  <div>
    {user}
    {follower}
    <Button loading={loading} onClick={handleClick} />
  </div>
);

export default connectWith(['user', 'follower'], Display);
```

## Docs

[Document And Best Practices](https://github.com/regionjs/region-core/blob/master/docs/Document.md)

[Migrate Guide](https://github.com/regionjs/region-core/blob/master/docs/Migrate.md)

[ChangeLog](https://github.com/regionjs/region-core/blob/master/docs/CHANGELOG.md)

## Example

[Online Example](https://dancerphil.github.io/redux-loadings/index.html)

```bash
git clone https://github.com/regionjs/region-core.git
cd example
npm i
npm start
```

## Contribute

Region is Extremely easy to extend, fire a issue if you have some great idea.

```javascript
import { Region } from 'region-core';

class MyRegion extends Region {
  constructor(...args) {
    super(...args);
    this.someFunc = this.someFunc.bind(this); // in case you are not using class field
  }

  someFunc() {}
}
```

As for pull request, make sure to add test for your code.
