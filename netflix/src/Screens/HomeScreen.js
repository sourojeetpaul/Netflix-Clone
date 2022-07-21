import React from "react"

import './HomeScreen.css'
import Nav from "../Nav"
import Banner from "../Banner"
import requests from "../Requests"
import Row from "../Row"

function HomeScreen() {
    return (
        <div className='HomeScreen'>
            {/* Navbar */}
            <Nav />

            {/* Banner */}
            <Banner />
            {/* Rows */}

            <Row
                title="Netflix Originals"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title="Trending Now "
                fetchUrl={requests.fetchTrending}
                isLargeRow
            />
            <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
                isLargeRow
            />
            <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
                isLargeRow
            />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
                isLargeRow
            />
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
                isLargeRow
            />
            <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
                isLargeRow
            />


        </div>
    )
}

export default HomeScreen