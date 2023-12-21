import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // L'état initial de la partie de l'état gérée par ce réducteur
  id: "",
  userName: "",
  lastName: "",
  firstName: "",
  email: "",
  token: "",
  isLoggedIn: false,
};

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         username: action.payload.username,
//         isLoggedIn: true,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         username: "",
//         isLoggedIn: false,
//       };
//     // Autres cas ici si nécessaire
//     default:
//       return state;
//   }
// };
// // userActions.js

// export const login = (username) => ({
//   type: "LOGIN",
//   payload: { username },
// });

// export const logout = () => ({
//   type: "LOGOUT",
// });

// export default userReducer;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      const { token } = action.payload;
      state.token = token;
    },
    todoToggled(state, action) {
      // Look for the specific nested object to update.
      // In this case, `action.payload` is the default field in the action,
      // and can hold the `id` value - no need for `action.id` separately
      const matchingTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (matchingTodo) {
        // Can directly "mutate" the nested object
        matchingTodo.completed = !matchingTodo.completed;
      }
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { login } = userSlice.actions;

// Export the slice reducer as the default export
export default userSlice.reducer;
