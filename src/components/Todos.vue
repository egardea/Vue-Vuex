<template>
  <div>
    <div
      v-for="todo in allTodos"
      :key="todo.id"
    >
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import { mapGetters } from 'vuex';

export default {
    name: 'Todos',
    components: {
        TodoItem
    },
    computed: mapGetters(['allTodos'])
}
</script>

<style scoped>

</style>