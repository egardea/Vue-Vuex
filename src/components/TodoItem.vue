<template> 
    <div class="todoItem" v-bind:class="{'todoItem--isCompleted':todo.completed}">
        <p>
            <input type="checkbox" :checked="todo.completed" @change="markComplete">
            {{ todo.title }}
            <button @click="$emit('del-todo', todo.id)" class="todoItem__deleteBtn">X</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            default: () => {},
        },
    },
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        }
    }
}
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
    }
</style>