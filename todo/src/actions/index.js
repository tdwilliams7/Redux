export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo
  };
};

export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    index
  };
};
