import { combineReducers } from 'redux';
import MovieReducer from "./MovieReducer";
import FavoriteReducer from './FavoriteReducer';

export default combineReducers({

    movie: MovieReducer,
    favorite: FavoriteReducer
});