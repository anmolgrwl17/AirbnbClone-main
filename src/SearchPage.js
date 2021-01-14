import React from 'react'
import './SearchPage.css'
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className='searchPage_info'>
            <p>62 stays . 26 August to 30 August . 2 guests</p>
            <h1>Stays nearby</h1>
            <Button
            variant="outlined">Cancellation Flexibility
            </Button>
            <Button
            variant="outlined">Type Of Place
            </Button>
            <Button
            variant="outlined">Price
            </Button>
            <Button
            variant="outlined">Rooms and Beds
            </Button>
            <Button
            variant="outlined">More Filters
            </Button>
            </div>
                <SearchResult
                img="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 room . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen"
                star={4.73}
                price="Rs.3000 / night"
                total="Rs. 11700 total"
                />
                <SearchResult
                img="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 room . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen"
                star={4.73}
                price="Rs.3000 / night"
                total="Rs. 11700 total"
                />
                <SearchResult
                img="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 room . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen"
                star={4.73}
                price="Rs.3000 / night"
                total="Rs. 11700 total"
                />
                <SearchResult
                img="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 room . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen"
                star={4.73}
                price="Rs.3000 / night"
                total="Rs. 11700 total"
                />
        </div>
    )
}

export default SearchPage
