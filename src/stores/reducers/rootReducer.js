const initstate = {
  user: [
    {
      id: 1,
      name: "dao",
    },
    {
      id: 2,
      name: "duc",
    },
  ],
  post: [],
};
const rootReducer = (state = initstate, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let user = state.user;
      user = user.filter((item) => item.id !== action.payload.id);
      return { ...state, user };

    case "CREATE_USER":
      let id = Math.floor(Math.random() * 101);
      let users = { id: id, name: "random " + id };
      return { ...state, user: [...state.user, users] };

    default:
      return state;
  }
  return state;
};
export default rootReducer;
