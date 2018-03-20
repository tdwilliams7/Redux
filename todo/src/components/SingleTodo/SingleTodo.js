import React from "react";
// maps over todo and returns in dom elements

const SingleTodo = props => {
  return (
    <ul>
      {props.friends.map((friend, i) => {
        return (
          <li key={i}>
            {friend}
            <button id={i} onClick={props.deleteTodo}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SingleTodo;
