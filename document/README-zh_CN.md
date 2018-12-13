# redux-loadings

[![version](https://img.shields.io/npm/v/redux-loadings.svg?style=flat-square)](http://npm.im/redux-loadings)
[![npm downloads](https://img.shields.io/npm/dm/redux-loadings.svg?style=flat-square)](https://www.npmjs.com/package/redux-loadings)
[![codecov](https://codecov.io/gh/dancerphil/redux-loadings/branch/develop/graph/badge.svg)](https://codecov.io/gh/dancerphil/redux-loadings)
[![MIT License](https://img.shields.io/npm/l/redux-loadings.svg?style=flat-square)](http://opensource.org/licenses/MIT)

一个代替 redux 处理同步与异步流程的 react 配套库。极其简单的 API！

## Get Started

```bash
npm i redux-loadings
```

创建一个文件 `load.js`

```javascript
import { load } from 'redux-loadings';
import { fetchUser } from './fetch'; // somewhere with axios

export const loadUser = () => load('user', fetchUser);
```

然后创建你的组件

```jsx harmony
import { connectWith } from 'redux-loadings';
import { loadUser } from './load';

loadUser();

const Display = ({ user }) => {...}

export default connectWith('user', Display, Loading);
```

或者

```jsx harmony
import { connectWith } from 'redux-loadings';
import { loadUser, loadFollower } from './load';

loadUser();
loadFollower();
// <Button onClick={loadFollower} />

const Display = ({ user, follower }) => {...}

export default connectWith(['user', 'follower'], Display, Loading);
```

## 文档

[中文文档](https://github.com/dancerphil/redux-loadings/blob/master/document/Document-zh_CN.md)

[迁移指南](https://github.com/dancerphil/redux-loadings/blob/master/document/Migrate-zh_CN.md)

[更新日志](https://github.com/dancerphil/redux-loadings/blob/master/document/CHANGELOG.md)

## 示例

[在线示例](https://dancerphil.github.io/redux-loadings/index.html)

```bash
git clone https://github.com/dancerphil/redux-loadings.git
cd example
npm i
npm start
```

## 截图

![](https://github.com/dancerphil/redux-loadings/blob/master/screenshot.gif)