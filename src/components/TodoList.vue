<template>
  <div>
    <AddTodo />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "TodoList",
  components: {
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(text) {
      this.todos.push({
        id: this.todos.length + 1,
        text: text,
        checked: false
      });
    }
  }
};
</script>
