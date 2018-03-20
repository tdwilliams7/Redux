import { ADD_TODO, DELETE_TODO } from "../actions/index";

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.todo];
    case DELETE_TODO:
      todos.slice(action.index, 1);
      return todos;
    default:
      return todos;
  }
};

// import { combineReducers } from 'redux';
// import todosReducer from './todos'
// const rootReducer = combineReducers({
//   todo: todosReducer
// })
//
// export default rootReducer;
