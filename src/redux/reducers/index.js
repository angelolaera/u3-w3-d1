const initialsState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialsState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((work) => work._id !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
