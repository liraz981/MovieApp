import store from "../../utils/store";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "./ActionTypes";


export const removeFavorite = (favoriteId) => {
    console.log('removeFavorite : ', favoriteId);

    let favorites = [...store.getState().favorite.allFavorite.filter(x => x.id != favoriteId)]

    return {
        type: REMOVE_FAVORITE,
        payload: favorites
    }
}

export const addFavorite = (favorite) => {
    console.log('add favorite : ', favorite);
    let favorites = [...store.getState().favorite.allFavorite, favorite]

    return {
        type: ADD_FAVORITE,
        payload: favorites
    }
}