import React from 'react';
import './Home.css'
import Banner from './Banner'
import Card from './Card'
function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home_section'>
                <Card 
                src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                title="Entire Homes"
                description="Comfortable private places, with room for friends or family."
                />
                <Card 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                title="Entire Homes"
                description="Comfortable private places, with room for friends or family."
                />
                <Card 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1550&q=80"
                title="Services"
                description="Enjoy various services at your doorstep"
                />
            </div>
            <div className='home_section'>
            <h1>Trending Spots</h1>
                <Card 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                title="Find Peace in home"
                description="To relax your mind to sleep."
                price="Rs.7000/night"
                />
                <Card 
                src="https://images.unsplash.com/photo-1451934403379-ffeff84932da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                title="Connect with Nature"
                description="Take some time out for yourself to connect with nature."
                price="Rs.7000/night"/>
                <Card 
                src="https://images.unsplash.com/photo-1598095511385-216a40c514fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                title="Or Take A Dip"
                description="Infinity pool fulfills your desires and who says no to water."
                price="Rs.7000/night"/>
            </div>
        </div>
    )
}

export default Home
