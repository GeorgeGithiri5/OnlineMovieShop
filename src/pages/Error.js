import React from 'react'
import BannerHolder from '../components/BannerHolder'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Error(){
    return(
        <BannerHolder classBanner='bannerBackground'>
            <Banner title='Opps,Wrong Page' message="your entered wrong Url,check it or click below">
                <Link to = '/' className= 'btn btn-warning'></Link>
            </Banner>
        </BannerHolder>
    )
}