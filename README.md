# AutoIndexFile

**Index.js file without your tears**

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

## Features

**File formats**: you may pass what you want. For example .jsx or .ts.

**Ignore directories**: you can exclude directories from processing.

**Named exports**: this tool can handle named exports from your components.

**Recursive**: handle subdirectories or only one layer.

**Watch**: observe file changes and run automatically or just once.

## Restrictions

**It works only with es6 modules syntax**.

This tool **expects and works only** with components structured by the following scheme:

```
Link - component directory
  index.js - component implementation (сase insensitive)
  ...
```

See example: [here](example/components/atoms/Text/index.js) or [here](example/components/Link/index.js)

## Name resolving

**Name calculation for default export**: module name will be a directory name.

For above example module name will be - **Link**.

**Name calculation for named export**: module name will be a combination of directory name, underscore, export name.

For above example module name will be - **Link_Anchor**.

See example: [here](example/components/index.js)

<!-- ## Install

```js
npm i auto-index-file
```

or

```js
yarn add auto-index-file
``` -->

## Usage

**CLI arguments**:

**`-h, --help`** Show help message and exit.

**`-t, --targetDir`** Set target directory for processing (**required**).

**`-r, --recursive`** Run recursively (default: false).

**`-w, --watch`** Observe file changes (default: false).

**`-f, --fileFormats`** File extensions whitelist (default: .js).

**`-e, --excludedDirectories`** Excluded directories (default: []).

### Examples

**Run recursively, observe files changes and process each file with .js extension**:

```
autoIndexFile -t src/components -r -w
```

**Run recursively and process each file with .js or .jsx extension**:

```
autoIndexFile -t src/components -r -f .js .jsx
```

**Run only for one layer depth and process each file with .js extension, but exclude all files in TestComponent and DemoUiKit directories**:

```
autoIndexFile -t src/components -e TestComponent DemoUiKit
```
