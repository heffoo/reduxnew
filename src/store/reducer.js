const initialState = {
  todos: [{ title: "123", completed: false }, { title: "123", completed: false }],
};
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODOS":
      return {
        ...state,
        todos: [{ title: action.text, completed: false }, ...state.todos],
      };
    case "DELETE_TODOS":
      return {
        ...state,
        todos: [...state.todos.filter((task, index) => index !== action.id)],
      };

    case "CHECKED_TASK": 
      return {
        ...state,
        todos: [...state.todos.sort((a, b) => {
          if (a.completed > b.completed) {
            return -1;
          }
          if (a.completed < b.completed) {
            return 1;
          }
          return 0;
        })],
      };

    case "TOGGLE_CHECK":
      let tod = [...state.todos];
      tod[action.id].completed = !tod[action.id].completed;
      return {
        ...state,
        todos: tod,
      };

    default:
      return state;
  }
}
