const state = {
    todos: [
      {
        id: 1,
        title: 'Todo one',
        completed: false,
      },
      {
        id: 2,
        title: 'Todo two',
        completed: true,
      },
      {
        id: 3,
        title: 'Todo three',
        completed: false,
      },
    ],
};

const getters = {
    allTodos: state => {
        return state.todos;
    },
};

const actions = {

};

const mutations = {
    addTodo(state, todo) {
        state.todos.push(todo);
      },
    toggleCompleted(state, todoId) {
        state.todos.forEach((todo) => {
          if (todo.id === todoId) {
            todo.completed = !todo.completed;
          }
        });
      },
    deleteTodo(state, todoId) {
        state.todos = state.todos.filter(todo => todo.id !== todoId);
      },
};

export default {
    state,
    getters,
    actions,
    mutations,
};