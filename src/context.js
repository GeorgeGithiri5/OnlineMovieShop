import React,{Component} from 'react'
import {movies,Demovies} from './data'

const MovieContext = React.createContext();

class MoviesProvider extends Component{
    state = {
        movies: [],
        recommended: [],
        MovieDetails: Demovies,
        inCart: true
    }
    componentDidMount(){
        const movies = this.getAllPosts()
        const recommended = movies.filter(movie=>movie.recommended===true)
        this.setState({
            movies,
            recommended
        })
    }
    getAllPosts(){
        const AllMovies = movies;
         return AllMovies
    }
    getItem=(id)=>{
        const movie = this.state.movies.find(item=>item.id===id)
        return movie
    }
    handleSingle=(id)=>{
        const movie = this.getItem(id)
        this.setState(()=>{
            return {MovieDetails: movie}
        })
    }
    // AddToCart=(id)=>{
    //     const inCart = this.getItem(id)
    //     this.setState(()=>{
    //         return { inCart: inCart}
    //     })
    // }

    render(){
        return(
               <MovieContext.Provider 
                value={{...this.state,
                handleSingle:this.handleSingle,
                }}
               >
                {this.props.children}
                </MovieContext.Provider> 
        )
    }
}

const MovieConsumer = MovieContext.Consumer

export {MovieContext, MoviesProvider,MovieConsumer}