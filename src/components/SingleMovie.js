import React from 'react'
import {Link} from 'react-router-dom'
import BannerHolder from './BannerHolder'
import Banner from './Banner'
import {MovieConsumer} from '../context'

export default function Single(){ 
    return(
        <MovieConsumer>
            {(value)=>{
                const{title,rating,image,price,short_desc,descr} = value.MovieDetails
                return(
                    <div className="container py-5">
                        <BannerHolder classBanner='single'>
                            <Banner title={ title } message = {short_desc}>
                                <Link className='btn btn-warning' to='/Movies'>Get movies</Link>
                            </Banner>
                        </BannerHolder>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                            <p className='mb-2'><strong>Rating: </strong> {rating}</p>
                            <h3>Price:{price} Ksh</h3>
                            <h3 className="text-center"><u>Description</u></h3>
                            <p className="lead bg-dark p-3 descr-single">{descr}</p>
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3">
                              <img src={image} className="img-fluid" alt=''/>  
                            </div>
                            <button className="btn btn-info mx-auto" onClick={()=>{
                                            
                                        }}><Link to='/cart'>Add To Cart</Link></button>
                        </div>
                    </div>
                )

      }}
        </MovieConsumer>
    )
} 
