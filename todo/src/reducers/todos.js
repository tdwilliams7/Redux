import { ADD_TODO } from "../actions";
export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:

    default:
      return todos;
  }
};
