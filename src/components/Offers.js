import React from 'react'
import Title from './Title'

export default function Offers(){
    return(
        <>
        <div className='container offersection'>
            <Title title="Offers"/>
            <div className='row'>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offer">
                    <div className="offer-1">
                        <h4>By 4 get 1</h4>
                    </div>
                    <hr></hr>
                    <div className="offer-d">
                        <p className='lead'>
                            For our customers,we usually have an offer of <span className='em'>By 4 get 1</span>
                            . We for a bunch of 4 purchases at once,we usually give you an offer of on free movie of your
                            choice.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offer">
                    <div className="offer-2">
                        <h4>Subscribe monthly get 20% discount</h4>
                    </div>
                    <hr></hr>
                    <div className="offer-d">
                        <p className='lead'>
                                We also have<span className='em'> Subscribe monthly get 20% discount</span>
                                . This is a kind of plan that helps you to greatly save on money
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offer">
                    <div className="offer-3">
                        <h4>Buy daily,get free at End week</h4>
                    </div>
                    <hr></hr>
                    <div className="offer-d">
                        <p className='lead'>
                                We also have<span className='em'> Buy daily,get free at End week </span>
                                . This is to appreciate our customers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}