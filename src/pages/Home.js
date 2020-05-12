import React from 'react'
import BannerHolder from '../components/BannerHolder'
import Banner from '../components/Banner'
import Offers from '../components/Offers'
import Recommended from '../components/Recommended'

export default class Home extends React.Component{
    render(){
        return(
            <>
                <BannerHolder classBanner='bannerBackground'>
                    <Banner title="Online Movie Shop" message="Shop your movies at your comfort. we offer latest movies at the
                    palm of your heads. We rank top in East Africa for giving high quality movies.">
                    </Banner>
                </BannerHolder>
                <Offers/>
                <Recommended />
            </>
        )
    }
} 