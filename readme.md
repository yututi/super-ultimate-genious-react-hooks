# Super ultimate genious react hooks
My ultimate react hooks

## Install

```
npm i @yututi/super-ultimate-genious-react-hooks
```

## Features
- Lifecycle hooks

## Usage

```js
import {
  useLifecycle
} from "@yututi/super-ultimate-genious-react-hooks"

export default function App() {

  useLifecycle({
    mounted: () => {
      // Called after the component has been mounted.
    },
    unmounted: () => {
      // Called after the component has been unmounted.
    }
  })

  return (
    <div>...</div>
  )
}
```

## License
WTFPL
