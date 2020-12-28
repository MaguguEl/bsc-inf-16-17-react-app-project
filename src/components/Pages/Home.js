import React from 'react'
import Navbar from '../Navbar'
import Cards from '../Cards'
import footer from '../Footer'
import Footer from '../Footer'
import Hero from '../Hero'

const Home = () =>{
    return(
        <div>
            <Navbar />
            {/*<Hero />*/}
            <Cards />
            <Footer />
            
        </div>
    );
}

export default Home;