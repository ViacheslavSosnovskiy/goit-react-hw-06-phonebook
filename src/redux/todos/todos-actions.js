const addTodo = text => ({
    type: 'ADD',
    payload: {
        id: shortid.generate(),
        text,
    }
})

const deleteTodo = todoId => ({
    type: 'DELETE',
    payload: todoId,
})

export default {addTodo, deleteTodo}