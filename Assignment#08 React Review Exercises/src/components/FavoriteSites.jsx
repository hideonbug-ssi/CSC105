import React from 'react';
import "../styles/FavoriteSites.css"

function FavoriteSites(){
    
    return(
        <section className='favoriteSites'>
            <h2>Favorite Site</h2>
            <ul>
                <li><a href="https://www.example1.com">Site 1</a></li>
                <li><a href="https://www.example2.com">Site 2</a></li>
                <li><a href="https://www.example3.com">Site 3</a></li>
                <li><a href="https://www.example4.com">Site 4</a></li>
                <li><a href="https://www.example5.com">Site 5</a></li>
            </ul>
        </section>
    )
}

export default FavoriteSites;