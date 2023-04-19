import store from "../../utils/store";
import { SET_ALL_MOVIES, SET_MOVIE } from "../actions/ActionTypes"
import axios from "axios";


export const getAllMovies = () => {

    return (dispatch) => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=247082c0fd9674d69377c506d2b38e04&amp;language=en-US&amp;page=1', {
        })
            .then((response) => response.data)
            .then((json) => {
                //console.log("--------- getAllMovies -------- response: ", json.results)
                dispatch({
                    type: SET_ALL_MOVIES, payload: json.results
                })
            }).catch(error => {
                console.log(error.response)

                dispatch({ type: SET_ALL_MOVIES, payload: null })
            })
    }

}

export const setMovie = (movieId) => {
    //console.log("-----setMovie----- movieId: ", movieId);
    return (dispatch) => {

        let allMovies = store.getState().movie.allMovies;
        let movie;
        movie = Object.values(allMovies).find(x => x.id == movieId);
        dispatch({ type: SET_MOVIE, payload: movie })
    }

}


export const clearMovie = () => {
    console.log("-----clearMovie---");
    return (dispatch) => {

        dispatch({ type: SET_MOVIE, payload: null })
    }
}

