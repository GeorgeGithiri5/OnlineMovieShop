import React from 'react'
import {MovieConsumer} from '../context'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function AddCart(){
    return(
        <MovieConsumer>
            {(value)=>{
                const {image,price} = value.MovieDetails
                return(
                    <>
                    <h3 className='text-center'>Your Cart</h3>
                    <div className='container mx-auto row'>
                        <div className='col-lg-4,col-md-4,col-sm-4,col-xs-4'>
                            <img className='img-fluid' src={image} width="50" height='50' alt=''/>
                        </div>
                        <div className='col-lg-4,col-md-4,col-sm-4,col-xs-4,mx-3,text-center'>
                            {price} Ksh
                        </div>
                        <div className='col-lg-4,col-md-4,col-sm-3,col-xs-4'>
                            <button className="btn btn-warning" onClick = {()=>{
                                alert('Thank You For the Purchase')
                            }}>
                                <Link to='/'>Purchase</Link>
                            </button>
                        </div>
                    </div>
                    </>
                )
            }}
        </MovieConsumer>
    )
}