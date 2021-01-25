<template> 
  <div
    class="todoItem"
    :class="{'todoItem--isCompleted':todo.completed}"
  >
    <p>
      <input
        type="checkbox"
        :checked="todo.completed"
        @click="toggleCompleted(todo.id)"
      />
      {{ todo.title }}
      <button
        class="todoItem__deleteBtn"
        @click="deleteTodo(todo.id)"
      >
        X
      </button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'todo-item',
    props: {
      todo: {
        type: Object,
        default: () => {},
      },
    },
    methods: {
      toggleCompleted(todoId) {
        this.$store.commit('toggleCompleted', todoId);
      },
      deleteTodo(todoId) {
        this.$store.commit('deleteTodo', todoId);
      },
    },
  };
</script>

<style scoped>
    .todoItem {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
        color: #000000;
    }
    .todoItem--isCompleted {
        text-decoration: line-through;
    }
    .todoItem__deleteBtn {
        background: #ff0000;
        color: #ffffff;
        border: none;
        border-radius: 50%;
        height: 25px;
        width: 25px;
        cursor: pointer;
        position: absolute;
        right: 25px;
    }
</style>