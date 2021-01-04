import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
 import Services from '../Components/Services'

export const Home = () => {
    return (
        <>
        <Hero >
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $999">
            <Link to='/rooms' className="btn-primary">our rooms</Link>
            </Banner>
        </Hero>
        <Services/>
        </>
    )
}
export default Home;