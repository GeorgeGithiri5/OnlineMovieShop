import React from 'react';
import Title from './Title'
import {MovieConsumer} from '../context'
import {Link} from 'react-router-dom'

export default function AllMovies(){
    return(
        <>
        <Title title= "Our Movies Available for you"/>
        <div className='container'>
        <div className="row">
        <MovieConsumer>
                    {(value)=>{
                        return value.movies.map(movie=>{
                            return(
                                <div className="col-lg-3 mx-auto col-md-3 col-sm-6 col-xm-12 recom p-4" key={movie.id}>
                                    <div className='img-cont d-flex justify-content-center'>
                                        <img src={movie.image} className="img" width='150px' height='150px' 
                                        style={{}} alt=''/>
                                    </div>
                                    <div className="more-info">
                                        <h5 className="text-center"><strong>Title:</strong> {movie.title}</h5>
                                        <p className="text-center"><strong>Rating:</strong> {movie.rating}</p>
                                        <p className="text-center"><strong>Price:</strong> {movie.price} Ksh</p>
                                        <p className=''><strong>Short description:</strong>{movie.short_desc}</p>
                                        <button className="btn btn-warning mr-5" 
                                        onClick = {()=>{value.handleSingle(movie.id)}}>
                                            <Link to={`/${movie.title}`}>View</Link></button>
                                        <button className="btn btn-info" onClick={()=>{
                                            
                                        }}>
                                            <Link to='/cart'>Add To Cart</Link></button>
                                    </div>
                                </div>
                            )
                        })
                    }}
                </MovieConsumer>
                </div>
        </div>
        </>
    )
}