const initialState = {
  song: [],
  rockClassic: ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"],
  popCulture: ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"],
  hipHop: ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IN_MAIN":
      return {
        ...state,
        song: [...state.song, action.payload],
      };

    default:
      return state;
  }
};

export default MainReducer;





