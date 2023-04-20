import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/ActionTypes";

const initialState = {

    favorite: null,
    allFavorite: []
}

export default (state = initialState, action) => {

    switch (action.type) {


        case ADD_FAVORITE:
            return { ...state, allFavorite: action.payload };
        case REMOVE_FAVORITE:
            return { ...state, allFavorite: action.payload };
        default:
            return state;
    }
}
