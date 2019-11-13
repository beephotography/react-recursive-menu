# Readme

<strong>react-recursive-menu</strong> is a small react component that renders a recursive HTML unordered list.

### Installation

```bash
npm i
```

### Start server

```bash
npx parcel src/index.html
```

### Usage

You just have to pass `items` as a JSON with the following structure:

```js
const items = [
    {
        title: "foo1",
        children: [
            {
                title: "foo1.1",
                children: [...]
            },
            ...
        ]
    },
    {
        title: "fooN"
    },
    ...
]
```

To the component as `items`-prop:

```HTML
<Menu items={items} />
```
