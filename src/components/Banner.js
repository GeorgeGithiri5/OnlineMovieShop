import React from 'react'

export default function({children,title,message}){
    return(
        <div className='banner'>
            <h1>{title}</h1>
            <p className='lead'>{message}</p>
            {children}
        </div>
    )
}