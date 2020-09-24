# Vue 3 React Hooks Example

React hooks with Vue 3 API Composition

## Use Hooks

```js
import { useReact } from "@/use/react.js";

const { useState, useEffect } = useReact();
```

## State

```js
import { useReact } from "@/use/react.js";

export default {
  setup() {
    const { useState } = useReact();

    const [id, setId] = useState(0);

    return { id, setId };
  }
}
```
## Effect(Watch)

```js
import { useReact } from "@/use/react.js";

export default {
  setup() {
    const { useState, useEffect } = useReact();

    const [id, setId] = useState(0);
    
    useEffect(([nextId], [prevId]) => {
      console.log({ id: nextId });
    }, [id]);

    return { id, setId };
  }
}
```
