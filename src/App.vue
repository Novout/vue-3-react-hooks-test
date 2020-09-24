<template>
  <input v-model="name" type="text">
  <section>
    <p>Next ID: {{ data.nextId }}</p>
    <p>Prev ID: {{ data.prevId }}</p>
    <p>Next Name: {{ data.nextName }}</p>
    <p>Prev Name: {{ data.prevName }}</p>
  </section>
  <button @click.prevent="addUser">Create User</button>
  <section>
    <article v-for="(user, index) in users" :key="index">
      <p>ID: {{ user.id }}</p>
      <p>Nome: {{ user.name }}</p>
    </article>
  </section>
</template>

<script>
import { useReact } from "@/use/react.js";

export default {
  name: 'App',
  setup() {
    const { useState, useEffect } = useReact();

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [data, setData] = useState({});
    const [users, setUsers] = useState([]);

    const addUser = () => {
      setId(++id.value)
      setUsers(users.push({ id: id.value, name: name.value }))
    }

    useEffect( ([nextId, nextName], [prevId, prevName]) => {
      setData({ nextName, prevName, nextId, prevId })
    }, [id, name]);

    return { id, name, data, users, setId, setName, setData, setUsers, addUser }
  }
}
</script>
