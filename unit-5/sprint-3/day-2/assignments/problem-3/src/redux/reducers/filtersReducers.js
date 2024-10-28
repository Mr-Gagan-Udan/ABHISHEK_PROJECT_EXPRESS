const initialState = {
    search: "",
    genre: "All",
    status: "All", // Read, Unread, or All
  };
  
  function filtersReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_SEARCH":
        return { ...state, search: action.payload };
      case "SET_GENRE":
        return { ...state, genre: action.payload };
      case "SET_STATUS":
        return { ...state, status: action.payload };
      default:
        return state;
    }
  }
  
  export default filtersReducer;
  