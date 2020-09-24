<template>
  <p @click.prevent="setCount(++count)">{{ count }}</p>
</template>

<script>
import { useReact } from "@/use/react.js";

export default {
  name: 'App',
  setup() {
    const { useState } = useReact();

    const [count, setCount] = useState(0);

    return { count, setCount }
  }
}
</script>
