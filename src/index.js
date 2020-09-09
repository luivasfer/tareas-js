import './styles.css';

import { TodoList, Todo } from './clases'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList()

todoList.todos.forEach(crearTodoHtml)
    //todoList.todos.forEach(todo => crearTodoHtml(todo))

console.log("todos", todoList.todos);