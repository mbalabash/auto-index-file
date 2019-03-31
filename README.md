# AutoIndexFile

**Index.js file without your tears 😉**

## Install

```js
npm i -D auto-index-file
```

or

```js
yarn add -D auto-index-file
```

## Features

**Ignore directories**: you can exclude directories from processing.

**Named exports**: this tool can handle named exports from your components.

**Recursive**: handle subdirectories.

**Watch**: observe file changes and run automatically or just once.

## Usage

**CLI arguments**:

**`-h, --help`** Show help message and exit.

**`-t, --targetDir`** Set target directory for processing (**required**).

**`-w, --watch`** Observe file changes (default: false).

**`-e, --excludedDirectories`** Excluded directories (default: []).

**Run recursively and observe files changes**:

```
autoIndexFile -t src/components -w
```

## Motivation

When you split your UI code into components usually you need some methodology to organize your code.

One way to do it - use Atomic Design way. But not dependence on your methodology you will have a deal with a lot of components and folders.

As result, you may recognize next situation.

```
src
  components
    atoms
    molecules
    organisms
```

```js
...
import Text from 'components/atoms/Text'
import Icon from 'components/atoms/Icon'
import Block from 'components/atoms/Block'
import Button from 'components/molecules/Button'
import Modal from 'components/organisms/Modal'
import Link, { Anchor } from 'components/molecules/Link'
...
```

It seems not bad, but not very comfortable too.

So, let's use an index.js file. We can create an index.js file in our root directory with components and import them from there.

As result:

```
src
  components
    atoms
    molecules
    organisms
    index.js
```

```js
...
import {
    Text, Icon, Block, Button, Modal, Link, Anchor
} from 'components'
...
```

It seems better (from my view). But now we faced with a new problem - support index.js file in a consistent state.

It means if we add / create new / delete / rename / etc any component we also must update our index.js file manualy.

Mmm, no thanks! It more badly than the first approach.

Fortunately, this work very easy to **automate**!

## Name resolving

**Name calculation for default export**: module name will be a directory name.

For above example module name will be - **Link**.

**Name calculation for named export**: module name will be a combination of directory name, underscore, export name.

For above example module name will be - **Link_Anchor**.

See example: [here](example/components/index.js)

## Restrictions

**It works only with es6 modules syntax**.

**It works only with files with .js extension**.

This tool **expects and works only** with components structured by the following scheme:

```
Link - component directory
  index.js - component implementation (сase insensitive)
  ...
```

See examples: [here](example/components/atoms/Text/index.js) or [here](example/components/Link/index.js)

## Support

Feel free to ask or open an issue

## Licence

MIT
