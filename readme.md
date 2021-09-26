# Super ultimate genious react hooks
My ultimate react hooks

## Install

```
TBD
```

## Features
- Lifecycle hooks

## Usage

```js
import {
  useLifecycle
} from "@yututi/super-ultimate-genious-hooks"

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
