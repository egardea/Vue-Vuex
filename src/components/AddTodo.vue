<template>
    <div>
        <form @submit="addTodo">
            <input v-model="title" type="text" name="title" placeholder="Add Todo...">
            <input type="submit" name="submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(event) {
            event.preventDefault();

            const newTodo = {
                id: Math.floor(Math.random() * 100),
                title: this.title,
                completed: false
            }

            this.$emit('add-todo', newTodo);
            this.title = '';
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 5px;
    }
    input[type="submit"] {
        flex: 2;
    }
</style>