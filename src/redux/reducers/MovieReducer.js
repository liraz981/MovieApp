import { SET_MOVIE, SET_ALL_MOVIES } from "../actions/ActionTypes";

const initialState = {

    movie: null,
    allMovies: []
}

export default (state = initialState, action) => {

    switch (action.type) {


        case SET_MOVIE:
            return { ...state, movie: action.payload };
        case SET_ALL_MOVIES:
            return { ...state, allMovies: action.payload };
        default:
            return state;
    }
}
