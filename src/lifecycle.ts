import { useEffect } from "react"

type Lifecycles = {
  mounted?: () => void
  unmounted?: () => void
}

export default function (args: Lifecycles) {
  useEffect(()=> {
    args.mounted && args.mounted()
    return () => {
      args.unmounted && args.unmounted()
    }
  }, [])
}
