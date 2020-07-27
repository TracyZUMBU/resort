import React from 'react'
import { Link } from 'react-router-dom'

import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Services from "../components/Services"


export const Home = () => {
    return (
        <>
       <Hero>
           <Banner title="luxurious rooms" subtitle="deluxe rooms starting at 299€">
               <Link to="/home" className="btn-primary">
                   our rooms
               </Link>
           </Banner>
       </Hero>
       <Services/>
        </>
    )
}

export default Home