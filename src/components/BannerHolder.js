import React from 'react'

export default function BannerHolder({children,classBanner}){
    return(
        <div className={classBanner}>
            {children}
        </div>
    )
}