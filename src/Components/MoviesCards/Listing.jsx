import React, {useEffect, useReducer, useState} from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { red } from '@mui/material/colors';
import Reducer from "../../Redux/Reducer";
import Category from "../Category/Category";
import Paginations from "../Pagination/Paginations";
import {movies$} from "../../Services/movies";
import "../../Styles/Components/MoviesCards/Listing.css"

const titleStyle = {
    textAlign: "left",
    fontSize: "5vw",
    fontFamily: "Mont",
    color: "#283D47",
};

const Listing = () => {
    const [state, dispatch] = useReducer(Reducer, {allMovies: [], filteredMovies: [], likes: [], dislikes: []});
    const [activePage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(4);
    const filteredCategory = Array.from(new Set(state.allMovies.map(movie => movie.category)));
    const indexOfLastMovie  = activePage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = state.filteredMovies && state.filteredMovies.length !== 0 ?
        state.filteredMovies.slice( indexOfFirstMovie, indexOfLastMovie ) :
        state.allMovies.slice( indexOfFirstMovie, indexOfLastMovie );

const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
};

useEffect(() => {
    const fetchMovies = async () => {
        return movies$;
    };
    fetchMovies().then(data => dispatch({type:'initial', data}));
}, []);

    return (
        <>
        <Category filteredCategory={filteredCategory} dispatch={dispatch} />

        <div className="cardsComponent">
            {state && currentMovies.map(movie => {
                return (
                    <div className="movieCard">
                        <div key={movie.id}>
                            <div className="topContainer">
                                <IconButton onClick={() => dispatch({type:'remove', id: movie.id})} value={2} aria-label="delete" size="large">
                                    <DeleteIcon fontSize="inherit" sx={{ color: red[500] }}/>
                                </IconButton>
                            </div>
                            <div className="citiesPricesContainer">
                                <div className="bottomContainer">
                                    <span className="movieName">{movie.title}</span>
                                </div>
                                <div className="bottomContainer">
                                    <span className="currentPrice">{movie.category}</span>
                                </div>
                                <div className="bottomContainer">
                                    <IconButton active={movie.likesActive} onClick={() => dispatch({ type:'likes', id: movie.id})} value={2}>
                                        <ThumbUpOutlinedIcon fontSize="inherit" />
                                    </IconButton>
                                    <p>{movie.likes}</p>
                                    <IconButton active={movie.dislikesActive} onClick={() => dispatch({ type:'dislikes', id: movie.id})} value={2}>
                                        <ThumbDownOutlinedIcon fontSize="inherit" />
                                    </IconButton>
                                    <p>{movie.dislikes}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
        </div>
        
        <div className="footer">
            <Paginations state={state.filteredMovies && state.filteredMovies.length !== 0 ? state.filteredMovies : state.allMovies} activePage={activePage} handlePageChange={handlePageChange} handleNumberMovies={setMoviesPerPage}/>
        </div>
        </>
    )
}

export default Listing;